package br.com.senj.eventos.repository;

import br.com.senj.eventos.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface EventoRepository extends JpaRepository<Evento,Long> {

    Collection<Evento> findByIdUsuario(Long id);
}
