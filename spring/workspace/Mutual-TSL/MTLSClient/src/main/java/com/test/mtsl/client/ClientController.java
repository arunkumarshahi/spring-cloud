package com.test.mtsl.client;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/client")
public class ClientController {
	@Autowired
	Environment env;
	 @Autowired
	   RestTemplate restTemplate;
    @GetMapping("/name/{name}")
	public String readName(@PathVariable String name) {
    	String serviceEndpoint = env.getProperty("endpoint.mtls-service");
    	Map<String, String> vars = new HashMap<>();
    	vars.put("name", name);
    	

    	//String greetingMsg=restTemplate.getForObject("http://localhost:8080/api/name/{name}", 
    	String greetingMsg=restTemplate.getForObject("http://localhost:8080/api/name/{name}",  
    	String.class, vars);
    	return greetingMsg;
	}
}
