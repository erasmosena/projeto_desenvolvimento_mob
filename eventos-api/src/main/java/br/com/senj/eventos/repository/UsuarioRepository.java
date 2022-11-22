package br.com.senj.eventos.repository;

import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    @Query(value = " select u.* from usuario u " +
            "where " +
            "   u.identificador =  ?1  ", nativeQuery = true)
    Usuario findByIdentificador(String identificador);
    Usuario findByLogin(String login);
    Usuario findByLoginAndSenha(String login,String senha);

}
