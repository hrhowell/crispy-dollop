package com.p2.recApp.users;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name="loginTest")
public class LoginTest {
	

	 @Id
	 @GeneratedValue
	 private Integer id;
	 
	private String firstname;
	private String lastname;
	private String email;
	private String username;
	private String password;
	

}
