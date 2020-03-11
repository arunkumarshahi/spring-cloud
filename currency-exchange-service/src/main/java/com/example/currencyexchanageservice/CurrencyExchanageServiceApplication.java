package com.example.currencyexchanageservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CurrencyExchanageServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CurrencyExchanageServiceApplication.class, args);
    }

}
