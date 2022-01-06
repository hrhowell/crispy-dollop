package com.p2.recApp.users;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/
//tutorial calls this AppUserRespository AND AppUserService
@Repository
@Transactional()
public interface UserRepository extends JpaRepository<User, Integer>{
	
//	Optional<User> findByEmail(String email);
//	Optional<User> findByUsername(String username);
//	Optional<User> findByPassword(String password); 
	
//	User findById(Integer userID);
	List<User> findAll();
	Optional<User> findByEmail(String email);
	Optional<User> findById(Integer userID);
//	Optional<User> addUser(
//			String firstname,
//			String lastname,
//			String emial,
//			String username,
//			String password);
	
//	Optional<User> addUser(
//			String firstname,
//			String lastname,
//			String emial,
//			String username,
//			String password);
//	
	

}
