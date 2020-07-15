package se.andolf.transform.repositories;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import se.andolf.transform.models.entities.Exercise;

public interface ExerciseRepository extends ReactiveCrudRepository<Exercise, Long> {

}
