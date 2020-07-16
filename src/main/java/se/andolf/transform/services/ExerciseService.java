package se.andolf.transform.services;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
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
}