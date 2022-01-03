package com.p2.recApp.users;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class loginTestJPAResource {
	
	@Autowired
	private LoginTestRepository loginTestRepository;
	
	@GetMapping("/jpa/login")
	//public List<LoginTest> retrieveAllUsers() {
	public String retrieveAllUsers() {
		
		return "Login test";
		
	}
	

	@GetMapping("/jpa/users/{id}")
	public Optional<LoginTest> retrieveUsers(@PathVariable int id) {
		
		Optional<LoginTest> loginTest = loginTestRepository.findById(id);
		return loginTest;
	}
	
	@PostMapping("/jpa/users")
	public LoginTest createUsers(@Valid @RequestBody LoginTest loginTest) {
		LoginTest loginTest2 = loginTestRepository.save(loginTest);
		return loginTest2;
	}

}
