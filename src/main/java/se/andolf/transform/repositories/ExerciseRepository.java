package se.andolf.transform.repositories;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import se.andolf.transform.models.entities.Exercise;

public interface ExerciseRepository extends ReactiveCrudRepository<Exercise, Long> {

    @Query("select E.* from exercises E " +
            "inner join exercises_categories EC on E.id = EC.exercise_id " +
            "inner join categories C on EC.category_id = C.id " +
            "where C.name = :name")
    Flux<Exercise> getExercisesByCategory(String name);

}
