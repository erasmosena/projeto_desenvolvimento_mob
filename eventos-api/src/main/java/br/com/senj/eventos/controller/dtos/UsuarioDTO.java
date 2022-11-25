package br.com.senj.eventos.controller.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class UsuarioDTO {

    private long id;

    private String identificador;

    private String nome;

    private String login;

    private String senha;
}
