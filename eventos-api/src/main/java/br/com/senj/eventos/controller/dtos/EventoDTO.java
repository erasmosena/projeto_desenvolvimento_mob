package br.com.senj.eventos.controller.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class EventoDTO {

    private long id;

    private long idUsuario;

    private String nome;

    private String descricao;

    private Date dataInicio;

    private Date dataFim;
}
