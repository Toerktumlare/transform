package se.andolf.transform.graphql.mutations;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.transform.graphql.AbstractDataFetcher;
import se.andolf.transform.models.entities.Exercise;

@Component
public class ExerciseMutationDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<Exercise>> {

    @Override
    public Mono<Exercise> get(DataFetchingEnvironment environment) {
        final Exercise exercise = objectMapper.convertValue(environment.getArgument("input"), Exercise.class);
        return exerciseService.save(exercise);
    }
}
