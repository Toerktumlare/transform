package se.andolf.transform.config;

import graphql.ExecutionInput;
import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import graphql.spring.web.reactive.ExecutionInputCustomizer;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import reactor.util.context.Context;
import se.andolf.transform.FileUtils;
import se.andolf.transform.graphql.UserDataFetcher;

import static graphql.schema.idl.TypeRuntimeWiring.newTypeWiring;

@Configuration
@EnableAspectJAutoProxy
@AllArgsConstructor
public class GraphQLConfig {

    private final UserDataFetcher userDataFetcher;

    @Bean
    public GraphQL graphQL() {
        final String content = FileUtils.readFile("schema.graphqls");
        final GraphQLSchema graphQLSchema = buildSchema(content);
        return GraphQL.newGraphQL(graphQLSchema).build();
    }

    @Bean
    @Primary
    public ExecutionInputCustomizer customExecutionInputCustomizer() {
        return (ExecutionInput executionInput, ServerWebExchange serverWebExchange) -> ReactiveSecurityContextHolder.getContext()
                .flatMap(securityContext -> Mono.just(executionInput.transform(builder -> builder
                        .context(Context.of(SecurityContext.class, securityContext)))));
    }

    private GraphQLSchema buildSchema(String sdl) {
        final TypeDefinitionRegistry typeRegistry = new SchemaParser().parse(sdl);
        final RuntimeWiring runtimeWiring = buildWiring();
        final SchemaGenerator schemaGenerator = new SchemaGenerator();
        return schemaGenerator.makeExecutableSchema(typeRegistry, runtimeWiring);
    }

    private RuntimeWiring buildWiring() {
        return RuntimeWiring.newRuntimeWiring()
                .type(newTypeWiring("Query")
                        .dataFetcher("user", userDataFetcher))
                .build();
    }
}
