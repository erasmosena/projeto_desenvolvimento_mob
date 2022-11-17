package br.com.senj.eventos.controller.dtos;

import lombok.Data;

@Data
public class LoginDTO {

    private String login;
    private String senha;
    private String token;

}
