package se.andolf.transform.security;

import lombok.AllArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import reactor.core.publisher.Mono;
import se.andolf.transform.repositories.UserRepository;

@AllArgsConstructor
public class UserDetailsService implements ReactiveUserDetailsService {

    private final UserRepository userRepository;

    @Override
    public Mono<UserDetails> findByUsername(String username) {
        System.out.println(username);
        return userRepository.findByEmail(username)
            .map(users -> User.withUsername(users.getEmail())
            .password(users.getPassword())
            .roles("ADMIN").build()
                    ).switchIfEmpty(Mono.error(() -> new AccessDeniedException("ACCESS DENIED")));
    }
}
