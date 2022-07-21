package com.lkportal.dsmeta.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lkportal.dsmeta.entities.Sales;
import com.lkportal.dsmeta.services.SalesService;

@RestController
@RequestMapping(value="/sales")
public class SalesResource {
	
	@Autowired
	SalesService services;
	
	@GetMapping
	public List<Sales> findAll(){
		return services.findSales();
	}
	
	
}