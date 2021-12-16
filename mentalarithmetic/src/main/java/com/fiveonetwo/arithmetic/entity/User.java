package com.fiveonetwo.arithmetic.entity;

import lombok.Data;

@Data
public class User {
    private Integer id;

    private String username;

    private String name;

    private String password;

    private Boolean sex;

    private Boolean authority;


}