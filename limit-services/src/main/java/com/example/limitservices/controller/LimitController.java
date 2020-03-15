package com.example.limitservices.controller;

import com.example.limitservices.model.LimitConfiguration;
import com.example.limitservices.model.LimitProperty;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LimitController {
    @Autowired
    private LimitProperty limitProperty;

    @GetMapping("/limits")
    public LimitConfiguration retrieveLimitConfiguration() {
        return new LimitConfiguration(limitProperty.getMinimum(), limitProperty.getMaximum());
    }
    
    @GetMapping("/fault-tolerance-example/{payload}")
    @HystrixCommand(fallbackMethod = "fallbackRetrieveLimitConfigurationForFault")
    public LimitConfiguration retrieveLimitConfigurationForFault(@PathVariable int payload ) {
    	int opData=100/payload;
        return new LimitConfiguration(limitProperty.getMinimum(), limitProperty.getMaximum());
    }
    
   
    public LimitConfiguration fallbackRetrieveLimitConfigurationForFault(int payload) {
        return new LimitConfiguration(payload, 200);
    }
}
