package se.andolf.transform.graphql.queries;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.transform.graphql.AbstractDataFetcher;
import se.andolf.transform.models.entities.Category;

import java.util.List;
import java.util.Optional;

@Component
public class CategoryDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<List<Category>>> {

    @Override
    public Mono<List<Category>> get(DataFetchingEnvironment env) {
        return Optional.ofNullable(env.getArgument("exercise"))
                .map(category -> categoryService.get(Category.builder()
                        .name((String) category)
                        .build()))
                .orElse(categoryService.getAll())
                .collectList();

    }
}
