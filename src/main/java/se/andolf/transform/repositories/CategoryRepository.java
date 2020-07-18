package se.andolf.transform.repositories;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import se.andolf.transform.models.entities.Category;

public interface CategoryRepository extends ReactiveCrudRepository<Category, Long> {

    @Query("select C.* from categories C " +
            "inner join exercises_categories EC on C.id = EC.category_id " +
            "inner join exercises E on EC.exercise_id = E.id " +
            "where E.name = :name")
    Flux<Category> getCategoriesByExercise(String name);
}
