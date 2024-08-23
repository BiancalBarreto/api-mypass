package br.com.fiap.apimypass.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import br.com.fiap.apimypass.model.Password;

public interface PasswordRepository extends JpaRepository<Password, Long> {

    Optional<Password> findByPassword(String password);
}
