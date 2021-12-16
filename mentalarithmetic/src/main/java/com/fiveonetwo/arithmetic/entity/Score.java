package com.fiveonetwo.arithmetic.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class Score {
    private Integer sid;

    private Integer uid;

    private String username;

    private String name;

    private Integer type;

    private String typeName;

    private Integer num;

    private Integer timeStamp;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date time;

    private Integer finalScore;
}
