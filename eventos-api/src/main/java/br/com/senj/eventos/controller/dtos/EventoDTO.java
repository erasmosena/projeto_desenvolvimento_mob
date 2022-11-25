package br.com.senj.eventos.controller.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
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

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date dataInicio;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date dataFim;
}
