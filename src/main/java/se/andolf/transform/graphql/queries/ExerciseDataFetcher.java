package se.andolf.transform.graphql.queries;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.transform.graphql.AbstractDataFetcher;
import se.andolf.transform.models.entities.Category;
import se.andolf.transform.models.entities.Exercise;

import java.util.List;
import java.util.Optional;

@Component
public class ExerciseDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<List<Exercise>>> {

    @Override
    public Mono<List<Exercise>> get(DataFetchingEnvironment env) {
        final Mono<List<Exercise>> category1 = Optional.ofNullable(env.getArgument("category"))
                .map(category -> exerciseService.get(Category.builder()
                        .name((String) category)
                        .build()))
                .orElse(exerciseService.getAll())
                .collectList();

        return category1.doOnSuccess(System.out::println);
    }
}
