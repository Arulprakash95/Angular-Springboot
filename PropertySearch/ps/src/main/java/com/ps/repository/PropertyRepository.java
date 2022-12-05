package com.ps.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ps.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Integer> {
	
	@Query(nativeQuery = true, value = "select * from Property p where p.firstname  LIKE %?1%")
   List<Property> findByPropertyName(String name);
	
	//@Query(nativeQuery = true, value = "select * from Property p where p.firstname = ?1")
	//List<Property> findByPropertyName(String name);

	
	

}
