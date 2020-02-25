package com.example.jmsexample.model;

import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

@Data
public class HelloMessage implements Serializable {
  private UUID id;
  private String message;
}
