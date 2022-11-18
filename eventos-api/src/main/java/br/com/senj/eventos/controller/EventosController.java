package br.com.senj.eventos.controller;

import br.com.senj.eventos.controller.dtos.EventoDTO;
import br.com.senj.eventos.mappers.EventoMapper;
import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/eventos")
public class EventosController {

    EventoMapper eventoMapper = EventoMapper.INSTANCE;
    
    @Autowired
    private EventoRepository eventoRepository;


    @GetMapping("/usuario/{identificador}")
    public List<EventoDTO> listarTodos(@PathVariable ("identificador") String identificador){
        return eventoRepository.findByIdentificadorUsuario(identificador).stream().map(it-> eventoMapper.eventoToEventoDto(it))
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EventoDTO inserir(@RequestBody EventoDTO dto){
        Evento evento = eventoMapper.eventoDtoToEvento(dto);
        return eventoMapper.eventoToEventoDto(eventoRepository.save(evento));
    }

    
}
