package se.andolf.transform.graphql;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.transform.models.entities.User;

@Component
@AllArgsConstructor
public class UserDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<User>> {

    @Override
    public Mono<User> get(DataFetchingEnvironment env) {

        final Authentication auth = env.getArgument(Authentication.class.getName());
        final UserDetails userDetails = (UserDetails) auth.getPrincipal();

        return userService.getByEmail(userDetails.getUsername());
    }
}
