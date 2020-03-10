package com.example.limitservices.controller;

import com.example.limitservices.model.LimitConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LimitController {
    @GetMapping("/limits")
    public LimitConfiguration retrieveLimitConfiguration(){
        return new LimitConfiguration(2,200);
    }
}
