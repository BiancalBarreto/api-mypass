package br.com.fiap.apimypass.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import br.com.fiap.apimypass.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
}
