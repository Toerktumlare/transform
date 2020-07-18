package se.andolf.transform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import reactor.core.scheduler.Schedulers;
import reactor.tools.agent.ReactorDebugAgent;

@SpringBootApplication
public class TransformApplication {

	public static void main(String[] args) {
        ReactorDebugAgent.init();
        Schedulers.enableMetrics();
		SpringApplication.run(TransformApplication.class, args);
	}

}
