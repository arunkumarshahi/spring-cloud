package com.example.currencyexchanageservice.controller;

import com.example.currencyexchanageservice.model.ExchangeValue;
import com.example.currencyexchanageservice.repository.CurrencyExchangeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class CurrencExchangeController {

    private final CurrencyExchangeRepository currencyExchangeRepository;
    private final Environment environment;
    public CurrencExchangeController(CurrencyExchangeRepository currencyExchangeRepository, Environment environment) {
        this.currencyExchangeRepository = currencyExchangeRepository;
        this.environment = environment;
    }

    @GetMapping("/currency-exchange/from/{from}/to/{to}")
    public ExchangeValue getExchangeValue(@PathVariable String from, @PathVariable String to) {
        ExchangeValue exchangeValue=currencyExchangeRepository.findByToCurrencyAndFromCurrency(to, from).get();
        exchangeValue.setPort(Long.parseLong(environment.getProperty("server.port")));
        log.info("exchange value received {}",exchangeValue);
        return exchangeValue;
    }
}
