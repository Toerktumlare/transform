package se.andolf.transform.services;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import se.andolf.transform.models.entities.User;
import se.andolf.transform.repositories.UserRepository;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @PreAuthorize("hasRole('USER')")
    public Mono<User> getByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
