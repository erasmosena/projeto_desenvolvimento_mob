package br.com.senj.eventos.controller.dtos;

import lombok.Data;

import java.util.UUID;

@Data
public class LoginDTO {

    private String login;
    private String senha;
    private UUID identificador;

}
