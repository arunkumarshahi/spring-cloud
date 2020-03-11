package com.example.currencyconversionservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CurrencyValueBean {

    private Long id;
    private String toCurrency;
    private String fromCurrency;
    private BigDecimal exchangeValue;
    private Long port;
    private BigDecimal totalValue;
    private BigDecimal quantity;
//    private

    public BigDecimal getTotalValue() {
        if(StringUtils.isEmpty(toCurrency) || quantity==null){
         return new BigDecimal(0);
        }else {
            return quantity.multiply(exchangeValue);
        }
    }
}
