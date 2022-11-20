package br.com.senj.eventos.controller;

import br.com.senj.eventos.controller.dtos.EventoDTO;
import br.com.senj.eventos.mappers.EventoMapper;
import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.model.Usuario;
import br.com.senj.eventos.repository.EventoRepository;
import br.com.senj.eventos.repository.UsuarioRepository;
import br.com.senj.eventos.services.Validador;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/eventos")
public class EventosController {

    Logger logger = LoggerFactory.getLogger(EventosController.class);

    EventoMapper eventoMapper = EventoMapper.INSTANCE;
    
    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private Validador validador;


    @GetMapping("/usuario/{identificador}")
    public List<EventoDTO> listarTodos(@PathVariable ("identificador") String identificador){
        List<Evento> eventos = eventoRepository.findByIdentificadorUsuario(identificador);
        return eventos.stream().map(it-> eventoMapper.eventoToEventoDto(it))
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> inserir(@RequestBody EventoDTO dto){

        List<String>erros = validador.validarEvento(dto);
        if( erros.size() > 0 ){
            String mensagemErro = erros.stream().reduce((item,acumulardor)->acumulardor.concat("\n Erro: "+item)).get();
            logger.info(mensagemErro);
            return ResponseEntity.badRequest().body(mensagemErro);
        }
        Evento evento = eventoMapper.eventoDtoToEvento(dto);
        evento.setIdUsuario(usuarioRepository.findByIdentificador(dto.getIdentificadorUsuario()).getId());
        Evento novoEvento = eventoRepository.save(evento);
        return ResponseEntity.ok(eventoMapper.eventoToEventoDto(novoEvento));
    }

    
}
