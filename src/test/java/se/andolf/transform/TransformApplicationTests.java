package se.andolf.transform;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Mono;

import java.time.Duration;

class TransformApplicationTests {

    @Test
    public void test() throws InterruptedException {
        Mono.delay(Duration.ofSeconds(5)).then(Mono.just("hello")).subscribe(System.out::println);

        Thread.sleep(10000);
    }
}

@Configuration
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class SecurityConfiguration {

    private final SecurityContextRepository securityContextRepository;

    @Autowired
    public SecurityConfiguration(SecurityContextRepository securityContextRepository) {
        this.securityContextRepository = requireNonNull(securityContextRepository);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @SuppressFBWarnings(value = "SPRING_CSRF_PROTECTION_DISABLED")
    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
                // Disable default security.
        return http.httpBasic()
                    .disable()
                    .formLogin()
                    .disable()
                    .csrf()
                    .disable()
                    .logout()
                    .disable()
                    .cors()
                    .and()
                    // Add custom security.
                    .securityContextRepository(securityContextRepository)
                    .addFilterAt(
                            new SecurityContextServerWebExchangeWebFilter(),
                            SecurityWebFiltersOrder.SECURITY_CONTEXT_SERVER_WEB_EXCHANGE)
                    .authorizeExchange()
                    .pathMatchers("/api/authentication/v1/*", "/status", "/info", "/health", "/docs/**")
                    .permitAll()
                    .pathMatchers(HttpMethod.GET, "/api/locations/v1/**")
                    .permitAll()
                    .anyExchange()
                    .authenticated()
                    .and()
                    .exceptionHandling()
                    .and()
                    .build();
    }
}
