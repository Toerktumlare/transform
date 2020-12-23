package se.andolf.transform.graphql.queries;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;
import se.andolf.transform.graphql.AbstractDataFetcher;
import se.andolf.transform.models.entities.User;

@Component
public class UserDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<User>> {

    @Override
    public Mono<User> get(DataFetchingEnvironment env) {

        final Authentication auth = env.getArgument(Authentication.class.getName());
        if(auth == null) {
            return Mono.error(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
        }
        final UserDetails userDetails = (UserDetails) auth.getPrincipal();

        return userService.getByEmail(userDetails.getUsername())
                .switchIfEmpty(Mono.error(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED)));
    }
}
