package se.andolf.transform.services;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.transform.models.entities.Category;
import se.andolf.transform.repositories.CategoryRepository;

@Service
@AllArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @PreAuthorize("hasRole('USER')")
    public Mono<Category> save(Category category) {
        return categoryRepository.save(category);
    }

    public Flux<Category> getAll() {
        return categoryRepository.findAll();
    }

    public Flux<Category> get(Category category) {
        return categoryRepository.getCategoriesByExercise(category.getName());
    }
}
