package com.example.nexflixzuulapigateway;

import brave.sampler.Sampler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

import com.example.nexflixzuulapigateway.filter.ZuulLoggingFilter;

@SpringBootApplication
@EnableZuulProxy
@EnableDiscoveryClient
public class NexflixZuulApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(NexflixZuulApiGatewayApplication.class, args);
    }
    @Bean
    public ZuulLoggingFilter simpleFilter() {
      return new ZuulLoggingFilter();
    }

    @Bean
    public Sampler simpleSampler() {
        return Sampler.ALWAYS_SAMPLE;
    }
}
