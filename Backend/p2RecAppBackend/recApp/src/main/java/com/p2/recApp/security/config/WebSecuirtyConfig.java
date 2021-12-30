package com.p2.recApp.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.p2.recApp.users.UserService;

import lombok.AllArgsConstructor;

/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/


@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecuirtyConfig extends WebSecurityConfigurerAdapter {
//Q
	//Private variables used in setters
	private final BCryptPasswordEncoder bCryptPasswordEncoder;//setPasswordEncoder
	private final UserService UserService;//setUserDetailsService
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.csrf().disable()
				.authorizeRequests()
					.antMatchers("/api/v*/registration/**")
					.permitAll()
				.anyRequest()
				.authenticated().and()
				.formLogin();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.authenticationProvider(daoAuthentication());//*****************************Potential Bug***********************************
	}
	
	@Bean
	public DaoAuthenticationProvider daoAuthentication( ) {
		DaoAuthenticationProvider provider =
				new DaoAuthenticationProvider();
		provider.setPasswordEncoder(bCryptPasswordEncoder);
		provider.setUserDetailsService(UserService);
		return provider;
		
	}
	
}
