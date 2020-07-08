package se.andolf.transform.graphql;

import org.springframework.beans.factory.annotation.Autowired;
import se.andolf.transform.services.UserService;

abstract class AbstractDataFetcher {

    @Autowired
    UserService userService;
}
