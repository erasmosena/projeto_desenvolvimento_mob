package br.com.senj.eventos.controller.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import static org.springframework.format.annotation.DateTimeFormat.ISO;

@Data
@Builder
@AllArgsConstructor
public class EventoDTO {

    private Long id ;

    private String identificadorUsuario;

    private String nome;

    private String descricao;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private String dataInicio;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private String dataFim;

}
