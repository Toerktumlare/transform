package se.andolf.transform.models.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@Builder
@Table("exercises")
public class Exercise {

    @Id
    private Long id;
    private String name;
//    private ArrayList<Category> categories = new ArrayList<>();
}
