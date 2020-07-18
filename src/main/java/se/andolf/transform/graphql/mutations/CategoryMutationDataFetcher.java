package se.andolf.transform.graphql.mutations;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.transform.graphql.AbstractDataFetcher;
import se.andolf.transform.models.entities.Category;

@Component
public class CategoryMutationDataFetcher extends AbstractDataFetcher implements DataFetcher<Mono<Category>> {

    @Override
    public Mono<Category> get(DataFetchingEnvironment environment) {
        final Category category = objectMapper.convertValue(environment.getArgument("input"), Category.class);
        return categoryService.save(category);
    }
}
