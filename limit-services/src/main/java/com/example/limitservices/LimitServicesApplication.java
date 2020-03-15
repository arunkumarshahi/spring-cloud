package com.example.limitservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

@SpringBootApplication
@EnableHystrix
@EnableEurekaClient
public class LimitServicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(LimitServicesApplication.class, args);
    }

}
