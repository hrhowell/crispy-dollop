package com.p2.recApp.registration;

import org.springframework.stereotype.Service;

import com.p2.recApp.users.User;
import com.p2.recApp.users.UserRole;
import com.p2.recApp.users.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RegistrationService {
	//we may need to have this as private final 
	private  UserService userService;

	private  EmailValidator emailValidator;
	
	public String register(RegistrationRequest request) {
		//the gets want to be methods in request but it doesnt for the tutorial guys BUT the gets are in User/userservice
		boolean isValidEmail = emailValidator.test(request.getEmail());
		if(!isValidEmail) {
			throw new IllegalStateException("email not valid");
		}
		
		return userService.signUpUser(
				new User(
						
						request.getFirstname(),
						request.getLastname(),
						request.getEmail(),
						request.getUsername(),
						request.getPassword(),
						UserRole.USER
						
						)
				);
	}

}
