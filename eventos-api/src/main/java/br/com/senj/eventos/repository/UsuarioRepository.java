package br.com.senj.eventos.repository;

import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    Usuario findByLogin(String login);
    Usuario findByLoginAndSenha(String login,String senha);

}
