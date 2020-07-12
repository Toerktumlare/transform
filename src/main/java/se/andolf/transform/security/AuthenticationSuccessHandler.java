package se.andolf.transform.security;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.server.WebFilterExchange;
import org.springframework.security.web.server.authentication.ServerAuthenticationSuccessHandler;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.transform.models.entities.User;
import se.andolf.transform.repositories.UserRepository;

@AllArgsConstructor
public class AuthenticationSuccessHandler implements ServerAuthenticationSuccessHandler {

    private UserRepository userRepository;
    private ObjectMapper objectMapper;

    @Override
    public Mono<Void> onAuthenticationSuccess(WebFilterExchange webFilterExchange, Authentication authentication) {

        final ServerHttpResponse response = webFilterExchange.getExchange().getResponse();

        response.setStatusCode(HttpStatus.OK);
        response.getHeaders().add("Content-Type", "application/json");

        final UserDetails userdetails = (UserDetails)authentication.getPrincipal();

        return userRepository.findByEmail(userdetails.getUsername()).flatMap(user -> {
                byte[] bytes = writeAsBytes(user);
                final DataBuffer buffer = response.bufferFactory().wrap(bytes);
                return response.writeWith(Flux.just(buffer));
        });
    }

    private byte[] writeAsBytes(User user) {
        try {
            return objectMapper.writeValueAsBytes(user);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("Could not write user object to bytes");
        }
    }
}
