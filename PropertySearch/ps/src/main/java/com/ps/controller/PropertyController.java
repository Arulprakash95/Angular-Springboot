package com.ps.controller;

import java.net.URI;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ps.exception.PropertyNotFoundException;
import com.ps.model.Property;
import com.ps.service.PropertyService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/ps")

public class PropertyController {
	
	@Autowired
	private PropertyService service;

	@PostConstruct
	public void setUp() {

	//	service.createProperty(new Property("Arul","prakash","P1","A","xyz address","Desc1",1000,1,"asdf123"));
	//	service.createProperty(new Property("Jone","Kumar","P2","B","vft address","Desc2",2000,1,"jupc123"));
		
	} 
	
	@GetMapping("")
	public List<Property> getProperty() {
		return service.getAllProperty();
	}
	
	@PostMapping("")
	public Property saveBook(@RequestBody Property m) {
		return service.createProperty(m);
	}
	
	@GetMapping("/{id}")
	public Property getPropertyById(@PathVariable int id) throws Exception {
		return service.getPropertyById(id);
	}

	@DeleteMapping("/delete/{id}")  
    public void deleteProperty(@PathVariable int id) {  
 		service.deleteById(id);  
	}  
	
	@GetMapping("/firstname") // ?firstname="s"
	public List<Property> getBooksByName(@RequestParam String firstname){
		return service.getPropertyByName(firstname);
	}
		
	@PutMapping("/update/{id}")
	public void Updateproperty(@PathVariable int id, @Valid @RequestBody Property property) throws Exception {	
		service.updateById(id,property);
	}
	
}
