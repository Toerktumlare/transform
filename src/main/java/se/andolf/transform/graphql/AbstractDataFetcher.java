package se.andolf.transform.graphql;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import se.andolf.transform.services.CategoryService;
import se.andolf.transform.services.ExerciseService;
import se.andolf.transform.services.UserService;

public abstract class AbstractDataFetcher {

    @Autowired
    protected UserService userService;

    @Autowired
    protected ExerciseService exerciseService;

    @Autowired
    protected ObjectMapper objectMapper;

    @Autowired
    protected CategoryService categoryService;
}
