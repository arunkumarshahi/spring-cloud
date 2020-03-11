package com.example.limitservices.model;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LimitProperty {
    private int minimum;
    private int maximum;
}