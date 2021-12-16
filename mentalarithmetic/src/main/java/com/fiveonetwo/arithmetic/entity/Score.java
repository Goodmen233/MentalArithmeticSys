package com.fiveonetwo.arithmetic.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Score {
    private Integer sid;

    private Integer uid;

    private Integer type;

    private String typeName;

    private Integer num;

    private Integer timeStamp;

    private Date time;

    private Integer finalScore;
}
