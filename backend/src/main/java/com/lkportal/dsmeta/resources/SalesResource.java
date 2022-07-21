package com.lkportal.dsmeta.resources;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lkportal.dsmeta.entities.Sales;
import com.lkportal.dsmeta.services.SalesService;

@RestController
@RequestMapping(value="/sales")
public class SalesResource {
	
	@Autowired
	SalesService services;
	
	@GetMapping
	public Page<Sales> findAll(@RequestParam(value ="minDate",defaultValue = "") String minDate,
			@RequestParam(value="maxDate",defaultValue = "") String maxDate,
			Pageable pageable ){
		return services.findSales(minDate,maxDate,pageable);
	}
	
	
}
