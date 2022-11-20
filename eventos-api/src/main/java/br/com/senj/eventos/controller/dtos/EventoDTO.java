package br.com.senj.eventos.controller.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
public class EventoDTO {

    private Long id ;

    private String identificadorUsuario;

    private String nome;

    private String descricao;

    private Date dataInicio;

    private Date dataFim;
}
