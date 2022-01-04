//package com.p2.recApp.ingredients;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.SequenceGenerator;
//
//import org.springframework.data.annotation.Id;
//
//import lombok.AllArgsConstructor;
//import lombok.EqualsAndHashCode;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
///*************************************Works Cited*********************************************
// * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
// * Author: Nelson (amigoscode)
// * Date: 1/17/21 (Accessed 12/29/21)
// * Code Version: Java 15
// * Availability: https://youtu.be/QwQuro7ekvc
// *********************************************************************************************/
//
//@Getter
//@Setter
//@EqualsAndHashCode
//@AllArgsConstructor
//@NoArgsConstructor
//@ToString
//
//
//@Entity
//public class Ingredient  {
//
//	
//	@SequenceGenerator(
//			name="ing_sequence",	
//			sequenceName = "ing_sequence",
//			allocationSize = 1 
//			)
//	@Id
//	@GeneratedValue(
//			strategy = GenerationType.SEQUENCE, 
//			generator= "user_sequence"
//			)
//	
//	//come back and annotate with hibernate syntax
//	private int ingID;
//	private String ing_name;
//	private String rec;
//	private String ing_type;
//	private String meal_type;
//	
//	
//
//}
