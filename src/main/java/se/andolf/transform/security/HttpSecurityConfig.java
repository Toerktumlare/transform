package se.andolf.transform.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.csrf.CookieServerCsrfTokenRepository;
import org.springframework.security.web.server.csrf.CsrfToken;
import org.springframework.web.server.WebFilter;
import reactor.core.publisher.Mono;
import se.andolf.transform.repositories.UserRepository;

@Configuration
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class HttpSecurityConfig {

    @Value("${security.enable-csrf:false}")
    private boolean csrfEnabled;

    private final UserRepository userRepository;

    @Autowired
    public HttpSecurityConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public ReactiveUserDetailsService userDetailsService() {
        return new UserDetailsService(userRepository);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        final CookieServerCsrfTokenRepository cookieServerCsrfTokenRepository = new CookieServerCsrfTokenRepository();
        cookieServerCsrfTokenRepository.setCookieHttpOnly(false);
        http.csrf().csrfTokenRepository(cookieServerCsrfTokenRepository)
                .and()
                .authorizeExchange(exchanges -> exchanges
                        .pathMatchers("/graphql").hasRole("USER")
                        .pathMatchers("/**").permitAll()
                        .anyExchange().authenticated()
                )
                .formLogin(formLoginSpec -> formLoginSpec.loginPage("/login"));

        if(!csrfEnabled){
            http.csrf().disable();
        }

        return http.build();
    }

    @Bean
    @ConditionalOnProperty(
            value="security.enable-csrf",
            havingValue = "true")
    public WebFilter addCsrfToken() {
        return (exchange, next) -> exchange
                .<Mono<CsrfToken>>getAttribute(CsrfToken.class.getName())
                .doOnSuccess(token -> {}) // do nothing, just subscribe :/
                .then(next.filter(exchange));
    }
}