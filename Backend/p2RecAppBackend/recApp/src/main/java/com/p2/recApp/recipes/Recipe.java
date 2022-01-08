package com.p2.recApp.recipes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table (name="recipes")
public class Recipe {
	
	@Id
	@GeneratedValue(
			strategy = GenerationType.IDENTITY
			)
	
	@Column(name="recID")
	private Integer recID;

	@Column(name="rec_name")
	private String recName;
	
	@Column(name="meal_type")
	private String mealType;
	

}
