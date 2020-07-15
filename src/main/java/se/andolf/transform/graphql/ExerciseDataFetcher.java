package se.andolf.transform.graphql;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.transform.models.entities.Exercise;

import java.util.List;

@Component
@AllArgsConstructor
public class ExerciseDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<List<Exercise>>> {

    @Override
    public Mono<List<Exercise>> get(DataFetchingEnvironment env) {
        return exerciseService.getAll().collectList();
    }
}
