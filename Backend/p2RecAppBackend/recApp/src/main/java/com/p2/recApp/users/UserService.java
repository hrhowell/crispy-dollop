package com.p2.recApp.users;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.p2.recApp.registration.token.ConfirmationToken;
import com.p2.recApp.registration.token.ConfirmationTokenService;

import lombok.AllArgsConstructor;
/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
	
	private  BCryptPasswordEncoder bCryptPasswordEncoder;
	private final UserRepository userRepository;
	private final static String USER_NOT_FOUND_MSG = 
			"user with email %s not found";
	private final ConfirmationTokenService confirmationTokenService;
	
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email)
				.orElseThrow(
						() -> new UsernameNotFoundException(
								String.format(USER_NOT_FOUND_MSG, email)
								));
	}
	
	public String signUpUser(User user) {
		
		boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
		
		if(userExists) {
			throw new IllegalStateException("email taken");
		}
		
		String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		
		user.setPassword(encodedPassword);
		
		userRepository.save(user);
		
		//TODO: send confirmation token 
		
		String token = UUID.randomUUID().toString();
		ConfirmationToken cofirmationToken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				user
		);
		
		confirmationTokenService.saveConfirmationToken(cofirmationToken);

//		TODO: SEND EMAIL
		
		
		return token;
		
		
	}
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
		this.confirmationTokenService = null;
	}
	
	List <User> getUserProfiles(){
		
		return userRepository.findAll();
	}
	
	 public int enableUser(String email) {
	        return userRepository.enableUser(email);
	    }
	

}