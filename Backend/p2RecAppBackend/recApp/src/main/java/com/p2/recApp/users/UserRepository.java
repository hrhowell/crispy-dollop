package com.p2.recApp.users;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
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
@Transactional(readOnly= true)
public interface UserRepository extends JpaRepository<User, Integer>{
	
	
	Optional<User> findByEmail(String email);
	Optional<User> findById(Integer userID);
<<<<<<< HEAD
	//Optional<User> addUser(
	//		String firstname,
	//		String lastname,
	//		String emial,
	//		String username,
	//		String password);
//	
=======
//	Optional<User> addUser(
//			String firstname,
//			String lastname,
//			String emial,
//			String username,
//			String password);
	
>>>>>>> a2bfb5135a489547e946a83fb2d0601b49d9442c
//	Optional<User> updateUser(
//			String firstname,
//			String lastname,
//			String emial,
//			String username,
//			String password,
<<<<<<< HEAD
//			String profile_pic,
//			String fav_rec);
=======
//			String profile_pic, 
//			String fav_rec);
	Optional<User> findByUsername(String username);
	Optional<User> findByPassword(String password);
	Optional<User> findByUserID(Integer userID);
>>>>>>> a2bfb5135a489547e946a83fb2d0601b49d9442c

	
	//might need to change
	Optional<User> findByUsername(String username);
	Optional<User> findByPassword(String password);
	List<User> findAll();
//Q
	@Transactional
    @Modifying
    @Query("UPDATE User a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")
    int enableUser(String email);
}