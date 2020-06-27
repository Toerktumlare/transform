package se.andolf.transform.models.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@AllArgsConstructor
@Builder
@Table("users")
public class User {

    @Id
    private long id;
    private String givenName;
    private String familyName;
    private String middleName;
    private String email;
    private String password;

}
