package com.lkportal.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lkportal.dsmeta.entities.Sales;
import com.lkportal.dsmeta.repositories.SalesRepository;
@Service
public class SalesService {
	
	@Autowired
	SalesRepository saleRepository;
	
	
	public List<Sales> findSales(){
		return saleRepository.findAll();
	}
	
}
