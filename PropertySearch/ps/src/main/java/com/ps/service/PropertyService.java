package com.ps.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.ps.exception.PropertyNotFoundException;
import com.ps.model.Property;
import com.ps.repository.PropertyRepository;



	@Service
	public class PropertyService {
		
		@Autowired
		private PropertyRepository repo;
		
		
		
		public Property createProperty(Property m) {
			return repo.save(m);
		}
		
		
		public List<Property> getAllProperty() {
			return repo.findAll();
		}

		public void deleteById(int id)   {
               repo.deleteById(id);
		}
		
		public Property getPropertyById(int id) throws Exception {
			Optional<Property> optional = repo.findById(id);
			if(optional == null) {
				System.out.println("Book with id ("+id+") not found in db");
				//throw new BookNotFoundException("Book with id ("+id+") not found in db");
			} else {
				return optional.get();
			}
			return null;
		}
		
		public List<Property> getPropertyByName(String name) {
			
			if(!name.equals("''")&& name!=null && name.length()!=0) {
				String n=name.replace("'", "");
				System.out.println("Finding by name : "+n);
				return repo.findByPropertyName(n);
			} else {
				return getAllProperty();
			}
		}
		
		public Property updateById(int id) {		
			Optional<Property> optional = repo.findById(id);
			Property b=optional.get();
			
			 return repo.save(b);							
		}
		
		public ResponseEntity<Property> updateById(int id, Property property) throws PropertyNotFoundException {
			Optional<Property>  optional = repo.findById(id);
			Property p=optional.get();
			p.setFirstname(property.getFirstname());
			p.setLastname(property.getLastname());
			p.setPropertyname(property.getPropertyname());
			p.setAddress(property.getAddress());
			p.setType(property.getType());
			p.setLegaldesc(property.getLegaldesc());
			p.setTaxamount(property.getTaxamount());
			p.setEscrowaccount(property.getEscrowaccount());
			p.setTaxstatus(property.getTaxstatus());
			
			final Property updatedproperty = repo.save(p);
			return ResponseEntity.ok(updatedproperty);
		}
	
		
		
	
}
