package se.andolf.transform.config;

import graphql.schema.DataFetchingEnvironment;
import graphql.schema.DataFetchingEnvironmentImpl;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import reactor.util.context.Context;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import static reactor.core.publisher.Mono.just;

@Component
@Aspect
public class SecurityContextAspect {

    /**
     *
     * Intercept all DataFetchers to extract the ReactiveSecurityContext and place it in the current executing context
     * Also enrich the args to include the authentication object so we can extract it later.
     *
     * @param joinPoint
     * @return a Completable future with the resolved data
     */
    @Around("dataFetchers() && inPackage()")
    private CompletableFuture<?> securityContextAspect(ProceedingJoinPoint joinPoint) {

        final Object[] args = joinPoint.getArgs();
        final DataFetchingEnvironment env = (DataFetchingEnvironment) args[0];

        return ReactiveSecurityContextHolder.getContext()
                .flatMap(securityContext -> {

                    final DataFetchingEnvironment dataFetchingEnvironment = enrichEnv(env, securityContext);
                    return (Mono<?>) proceed(joinPoint, dataFetchingEnvironment);
                    })
                .subscriberContext(ctx -> ReactiveSecurityContextHolder
                        .withSecurityContext(getContext(env)))
                .switchIfEmpty((Mono) proceed(joinPoint, env))
                .toFuture();
    }

    private Mono<SecurityContext> getContext(DataFetchingEnvironment env) {

        SecurityContext context = null;

        try {
            context = env.<Context>getContext().get(SecurityContext.class);
        } catch (Exception e) {
            return Mono.empty();
        }

        return Mono.just(context);
    }

    /**
    *
    *   Enrich GraphQLs DataFetchingEnvironment by placing the current Authentication in it so we can get it as any other argument.
    *   The args are stored in a unmodifiable collection, so we need to create a new one copy everything over.
    *
    *   @return A DataFetchingEnvironment also contining the Authentication object
    */
    private DataFetchingEnvironment enrichEnv(DataFetchingEnvironment env, SecurityContext securityContext) {
        final Map<String, Object> arguments = new HashMap<>(env.getArguments());
        arguments.put(Authentication.class.getName(), securityContext.getAuthentication());
        return DataFetchingEnvironmentImpl.newDataFetchingEnvironment(env).arguments(arguments).build();
    }

    private Object proceed(ProceedingJoinPoint joinPoint, Object arguments) {
        try {
            return joinPoint.proceed(new Object[] {arguments});
        } catch (Throwable throwable) {
            return Mono.error(throwable);
        }
    }

    @Pointcut("target(graphql.schema.DataFetcher)")
    private void dataFetchers() {
    }

    @Pointcut("within(se.andolf.transform.graphql.*.*)")
    private void inPackage() {
    }
}
