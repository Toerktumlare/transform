package se.andolf.transform.services;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.transform.models.entities.Category;
import se.andolf.transform.models.entities.Exercise;
import se.andolf.transform.repositories.ExerciseRepository;

@Service
@AllArgsConstructor
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    @PreAuthorize("hasRole('USER')")
    public Flux<Exercise> getAll() {
        return exerciseRepository.findAll();
    }

    @PreAuthorize("hasRole('USER')")
    public Mono<Exercise> save(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @PreAuthorize("hasRole('USER')")
    public Flux<Exercise> get(Category category) {
        return exerciseRepository.getExercisesByCategory(category.getName());
    }
}
