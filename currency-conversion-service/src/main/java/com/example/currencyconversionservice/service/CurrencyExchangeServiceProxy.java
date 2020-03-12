package com.example.currencyconversionservice.service;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.currencyconversionservice.model.CurrencyValueBean;

//@FeignClient(name="currency-exchange-service",url="localhost:8100")
@FeignClient(name="nexflix-zuul-api-gateway")
@RibbonClient(name="currency-exchange-service")
public interface CurrencyExchangeServiceProxy {
//	@GetMapping("/currency-exchange/from/{from}/to/{to}")
	@GetMapping("/currency-exchange-service/currency-exchange/from/{from}/to/{to}")
public CurrencyValueBean retrieveCurrencyValue(@PathVariable String from, @PathVariable String to);
}
