package com.example.currencyconversionservice.controller;

import com.example.currencyconversionservice.model.CurrencyValueBean;
import com.example.currencyconversionservice.service.CurrencyExchangeServiceProxy;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
public class CurrencyConverterController {
	@Autowired
	private CurrencyExchangeServiceProxy currencyExchangeServiceProxy;
@GetMapping("/currency-converter/from/{from}/to/{to}/quantity/{quantity}")
    public CurrencyValueBean getCurrencyValue(@PathVariable String from, @PathVariable String to, @PathVariable BigDecimal quantity){
    Map<String,String> params=new HashMap<String,String>();
    params.put("from",from);
    params.put("to",to);
    log.info("data ..."+from+"::"+to+"::"+quantity);
    ResponseEntity<CurrencyValueBean> currencyValueBeanResponseEntity=new RestTemplate().getForEntity("http://localhost:8100/currency-exchange/from/{from}/to/{to}",
            CurrencyValueBean.class,params);
    log.info("currencyValueBeanResponseEntity..."+(CurrencyValueBean)currencyValueBeanResponseEntity.getBody());
    CurrencyValueBean currencyValueBean=currencyValueBeanResponseEntity.getBody();
    log.info(currencyValueBean.getFromCurrency());
    currencyValueBean.setQuantity(quantity);
    return currencyValueBean;
    }


@GetMapping("/currency-converter-feign/from/{from}/to/{to}/quantity/{quantity}")
public CurrencyValueBean getCurrencyValueByFeign(@PathVariable String from, @PathVariable String to, @PathVariable BigDecimal quantity){
CurrencyValueBean currencyValueBean=currencyExchangeServiceProxy.retrieveCurrencyValue(from, to);
log.info("currencyValueBean received in currency converter :::: {}",currencyValueBean);
currencyValueBean.setQuantity(quantity);
    log.info("currencyValueBean received in currency converter after quantity calculation:::: {}",currencyValueBean);
return currencyValueBean;
}
}
