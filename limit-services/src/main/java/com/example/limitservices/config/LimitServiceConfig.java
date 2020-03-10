package com.example.limitservices.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import com.example.limitservices.model.LimitProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@Configuration
public class LimitServiceConfig {

	private final Environment env;
	public LimitServiceConfig(Environment env) {
		this.env=env;
	}
	@Bean
	public LimitProperty getLimitProperty() {
		return new LimitProperty(Integer.parseInt( env.getProperty("maximum")),Integer.parseInt( env.getProperty("minimum")));
	}
	
}
