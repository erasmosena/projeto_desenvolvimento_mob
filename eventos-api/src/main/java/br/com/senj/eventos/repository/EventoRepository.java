package br.com.senj.eventos.repository;

import br.com.senj.eventos.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface EventoRepository extends JpaRepository<Evento,Long> {

    Collection<Evento> findByIdUsuario(Long id);

    @Query(value = " select e.* from evento e " +
            " inner join usuario u on e.id_usuario = u.id " +
            "where " +
            "   u.identificador =  uuid(?1)  ", nativeQuery = true)
    Collection<Evento> findByIdentificadorUsuario(String identificador);
}
