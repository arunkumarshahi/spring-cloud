package com.example.limitservices.controller;

import com.example.limitservices.model.LimitConfiguration;
import com.example.limitservices.model.LimitProperty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LimitController {
	@Autowired
	private LimitProperty limitProperty;
    @GetMapping("/limits")
    public LimitConfiguration retrieveLimitConfiguration(){
        return new LimitConfiguration(limitProperty.getMinimum(),limitProperty.getMaximum());
    }
}
