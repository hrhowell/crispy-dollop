package com.p2.recApp.springemailclient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/email")
public class EmailController {

	private EmailSenderService emailSenderService;
	@Autowired
	public EmailController(EmailSenderService emailSenderService) {
		this.emailSenderService = emailSenderService;
	}

	@PostMapping("/email-sent") 
	public String EmailInfo() {
		emailSenderService.sendSimpleEmail("qwinkypoo@gmail.com",
				"We are very sorry for this inconvience but don't worry, we got you!\n\nHere is your password: password\n\nThank you,\nThymeCrunch Tech Team",
				"Lost Password");
		return "redirect:/login";
	}
	
	@PostMapping("/recipe-email-sent") 
	public String RecipeEmailInfo() {
		emailSenderService.sendRecipeEmail("qwinkypoo@gmail.com",
				"We are very excited to see you like this recipe so much you wanted it emailed to you\n\nThank you,\nThymeCrunch Tech Team",
				"Lost Password");
		return "redirect:/login";
	}
	
	@PostMapping("/signup-email-sent") 
	public String SignUpEmailInfo() {
		emailSenderService.sendSignUpEmail("qwinkypoo@gmail.com",
				"We are very excited to have you be apart of the Thyme crunch experience and cant wait for you to experience all of the wonder things we have to offer, \nThymeCrunch Tech Team",
				"Lost Password");
		return "redirect:/login";
	}
}	


