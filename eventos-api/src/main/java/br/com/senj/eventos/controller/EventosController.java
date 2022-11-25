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

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        return eventos.stream().map(it-> eventoToEventoDto(it,identificador))
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> inserir(@RequestBody EventoDTO dto) throws ParseException {

        List<String>erros = validador.validarEvento(dto);
        if( erros.size() > 0 ){
            String mensagemErro = erros.stream().reduce((item,acumulardor)->acumulardor.concat("\n Erro: "+item)).get();
            logger.info(mensagemErro);
            return ResponseEntity.badRequest().body(mensagemErro);
        }
        //Evento evento = eventoMapper.eventoDtoToEvento(dto);
        Long idUsuario =usuarioRepository.findByIdentificador(dto.getIdentificadorUsuario()).getId();
        Evento evento = eventoDTOToEvento(dto, idUsuario);
        Evento novoEvento = eventoRepository.save(evento);
        return ResponseEntity.ok(eventoToEventoDto(novoEvento,dto.getIdentificadorUsuario()));
    }

    private Evento eventoDTOToEvento(EventoDTO dto, Long idUsuario) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Evento evento = Evento.builder()
                .dataFim( sdf.parse(dto.getDataFim()))
                .dataInicio(sdf.parse(dto.getDataInicio()))
                .descricao(dto.getDescricao())
                .nome(dto.getNome())
                .idUsuario(idUsuario)
                .build();
        return evento;
    }

    private EventoDTO eventoToEventoDto(Evento evento, String identificadorUsuario)  {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        EventoDTO eventoDTO = EventoDTO.builder()
                .dataFim( sdf.format(evento.getDataFim()))
                .dataInicio(sdf.format(evento.getDataInicio()))
                .descricao(evento.getDescricao())
                .nome(evento.getNome())
                .identificadorUsuario(identificadorUsuario)
                .build();
        return eventoDTO;
    }


}
