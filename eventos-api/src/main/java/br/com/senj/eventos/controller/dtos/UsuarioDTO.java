package br.com.senj.eventos.controller.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsuarioDTO {

    private long id;

    private String nome;

    private String login;

    private String senha;
}
