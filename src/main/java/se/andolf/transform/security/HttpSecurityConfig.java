package se.andolf.transform.security;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.csrf.CookieServerCsrfTokenRepository;
import org.springframework.security.web.server.csrf.CsrfToken;
import org.springframework.web.server.WebFilter;
import reactor.core.publisher.Mono;
import se.andolf.transform.repositories.UserRepository;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebFluxSecurity
@AllArgsConstructor
public class HttpSecurityConfig {

    private final UserRepository userRepository;

    @Bean
    public ReactiveUserDetailsService userDetailsService() {
        return (username) -> userRepository.findByEmail(username)
                .map(users -> User.withUsername(users.getEmail())
                        .password(users.getPassword())
                        .roles("ADMIN").build()
                ).switchIfEmpty(Mono.error(() -> new AccessDeniedException("ACCESS DENIED")));
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(16);
    }

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http.csrf().csrfTokenRepository(new CookieServerCsrfTokenRepository())
                .and()
                .authorizeExchange(exchanges -> exchanges
                        .pathMatchers("/**").permitAll()
                        .anyExchange().authenticated()
                )
                .httpBasic(withDefaults())
                .formLogin(formLoginSpec -> formLoginSpec.loginPage("/login"));
        return http.build();
    }

    @Bean
    public WebFilter addCsrfToken() {
        return (exchange, next) -> exchange
                .<Mono<CsrfToken>>getAttribute(CsrfToken.class.getName())
                .doOnSuccess(token -> {}) // do nothing, just subscribe :/
                .then(next.filter(exchange));
    }
}