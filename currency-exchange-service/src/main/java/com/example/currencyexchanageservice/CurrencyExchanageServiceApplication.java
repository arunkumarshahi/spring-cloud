package com.example.currencyexchanageservice;

import brave.sampler.Sampler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class CurrencyExchanageServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CurrencyExchanageServiceApplication.class, args);
    }
    @Bean
    public Sampler simpleSampler() {
        return Sampler.ALWAYS_SAMPLE;
    }
}
