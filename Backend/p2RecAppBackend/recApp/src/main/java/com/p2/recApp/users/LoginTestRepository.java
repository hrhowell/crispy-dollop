package com.p2.recApp.users;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginTestRepository extends JpaRepository<LoginTest, Integer>{
	List<LoginTest> findAll();
	Optional<LoginTest> findByEmail(String email);
	Optional<LoginTest> findById(Integer userID);
}
