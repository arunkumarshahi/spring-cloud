package com.example.currencyconversionservice.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.currencyconversionservice.model.CurrencyValueBean;

@FeignClient(name="currency-exchange-service",url="localhost:8100")
public interface CurrencyExchangeServiceProxy {
	@GetMapping("/currency-exchange/from/{from}/to/{to}")
public CurrencyValueBean retrieveCurrencyValue(@PathVariable String from, @PathVariable String to);
}
