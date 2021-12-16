package com.fiveonetwo.arithmetic;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.fiveonetwo.arithmetic.mapper")
public class MentalArithmeticApplication {

    public static void main(String[] args) {
        SpringApplication.run(MentalArithmeticApplication.class, args);
    }

}
