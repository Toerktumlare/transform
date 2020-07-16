package se.andolf.transform.graphql;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import se.andolf.transform.services.ExerciseService;
import se.andolf.transform.services.UserService;

public abstract class AbstractDataFetcher {

    @Autowired
    public UserService userService;

    @Autowired
    public ExerciseService exerciseService;

    @Autowired
    public ObjectMapper objectMapper;
}
