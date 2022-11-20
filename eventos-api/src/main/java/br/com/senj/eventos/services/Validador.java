package br.com.senj.eventos.services;

import br.com.senj.eventos.controller.dtos.EventoDTO;
import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.model.Usuario;
import br.com.senj.eventos.repository.EventoRepository;
import br.com.senj.eventos.repository.UsuarioRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class Validador {

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<String> validarEvento(EventoDTO dto){
        List<String> erros = new ArrayList<>();
        List<Evento> eventos = eventoRepository.findByDatas(dto.getDataInicio(), dto.getDataFim());
        if( eventos.size() > 0 ){
            erros.add("Existe um evento entre "+dto.getDataInicio()+" e "+ dto.getDataFim());
        }
        Usuario usuario = usuarioRepository.findByIdentificador(dto.getIdentificadorUsuario());
        if( usuario == null ){
            erros.add("usuario não existe: "+dto.getIdentificadorUsuario());
        }

        return erros;
    }
}
