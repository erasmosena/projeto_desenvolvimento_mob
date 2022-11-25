package br.com.senj.eventos.mappers;

import br.com.senj.eventos.controller.dtos.EventoDTO;
import br.com.senj.eventos.controller.dtos.LoginDTO;
import br.com.senj.eventos.controller.dtos.UsuarioDTO;
import br.com.senj.eventos.model.Evento;
import br.com.senj.eventos.model.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UsuarioMapper {
    UsuarioMapper INSTANCE = Mappers.getMapper( UsuarioMapper.class );

    UsuarioDTO usuarioToUsuarioDto(Usuario usuario);
    Usuario usuarioDtoToUsuario(UsuarioDTO usuarioDto);
    LoginDTO usuarioToLoginDto(Usuario usuario);
}
