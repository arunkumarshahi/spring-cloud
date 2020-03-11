package com.example.currencyexchanageservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;

@Slf4j
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ExchangeValue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String toCurrency;
    private String fromCurrency;
    private BigDecimal exchangeValue;
    private Long port;
}
