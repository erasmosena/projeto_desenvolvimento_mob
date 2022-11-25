package br.com.senj.eventos.mappers;

import br.com.senj.eventos.controller.dtos.EventoDTO;
import br.com.senj.eventos.model.Evento;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EventoMapper {

    EventoMapper INSTANCE = Mappers.getMapper( EventoMapper.class );

    EventoDTO eventoToEventoDto(Evento evento);
    Evento eventoDtoToEvento(EventoDTO eventoDto);
}
