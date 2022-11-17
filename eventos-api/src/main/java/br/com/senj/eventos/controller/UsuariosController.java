package br.com.senj.eventos.controller;

import br.com.senj.eventos.controller.dtos.EventoDTO;
import br.com.senj.eventos.controller.dtos.LoginDTO;
import br.com.senj.eventos.controller.dtos.UsuarioDTO;
import br.com.senj.eventos.mappers.EventoMapper;
import br.com.senj.eventos.mappers.UsuarioMapper;
import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.model.Usuario;
import br.com.senj.eventos.repository.EventoRepository;
import br.com.senj.eventos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {


    UsuarioMapper usuarioMapper = UsuarioMapper.INSTANCE;

    @Autowired
    private UsuarioRepository usuarioRepository;


    @GetMapping
    public List<UsuarioDTO> listarTodos(){
        return usuarioRepository.findAll().stream().map(it-> usuarioMapper.usuarioToUsuarioDto(it))
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UsuarioDTO inserir(@RequestBody UsuarioDTO dto){
        Usuario usuario = usuarioMapper.usuarioDtoToUsuario(dto);
        return usuarioMapper.usuarioToUsuarioDto(usuarioRepository.save(usuario));

    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public LoginDTO login(@RequestBody LoginDTO loginDto){
        Usuario usuario = usuarioRepository.findByLogin(loginDto.getLogin());
        return new LoginDTO();

    }

    
}
