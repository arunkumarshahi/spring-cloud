package com.example.currencyexchanageservice.repository;

import com.example.currencyexchanageservice.model.ExchangeValue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CurrencyExchangeRepository extends JpaRepository<ExchangeValue, Long> {
    Optional<ExchangeValue> findByToCurrencyAndFromCurrency(String toCurrency, String fromCurrency);
}
