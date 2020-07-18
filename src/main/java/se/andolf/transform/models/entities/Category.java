package se.andolf.transform.models.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("categories")
@AllArgsConstructor
@Builder
public class Category {

    @Id
    private Long id;
    private String name;
}
