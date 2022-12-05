package com.ps.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ps.model.*;
import com.ps.repository.*;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<com.ps.model.User> userList =getAllUsers();
	
		if(userList!=null) {
		for(com.ps.model.User u:userList) {
		if (u.getLogin().equals(username)) {
			return new User(u.getLogin(), "{noop}"+u.getPassword(), new ArrayList<>());
		} 
		}	
		}else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return null;
	}
	
	public List<com.ps.model.User> getAllUsers() {
		return repo.findAll();
	}
}