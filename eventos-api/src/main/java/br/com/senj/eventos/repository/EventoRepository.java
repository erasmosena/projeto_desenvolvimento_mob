package br.com.senj.eventos.repository;

import br.com.senj.eventos.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Repository
public interface EventoRepository extends JpaRepository<Evento,Long> {

    Collection<Evento> findByIdUsuario(Long id);

    @Query(value = " select e.* from evento e " +
            " inner join usuario u on e.id_usuario = u.id " +
            "where " +
            "   u.identificador =  ?1  ", nativeQuery = true)
    List<Evento> findByIdentificadorUsuario(String identificador);

    @Query(value = " select e.* from evento e " +
            "where " +
            "   ?1  between e.data_inicio and e.data_fim or ?2 between e.data_inicio and e.data_fim", nativeQuery = true)
    List<Evento> findByDatas(Date dataInicio, Date dataFim);
}
