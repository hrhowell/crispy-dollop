package com.p2.recApp.ingredients;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.p2.recApp.ingredients.IngredientRepository;

import lombok.AllArgsConstructor;

/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/

//need to come back to this, not sure we need this 
@Service
@AllArgsConstructor
public class IngredientService {
	
	private final IngredientRepository ingredientRepository;
	private String recipe;
	private String mealType;
	private Integer ingID;
	
	public List<Ingredient> getAllIng() {
		return ingredientRepository.findAll();
		}
	
	public Optional<Ingredient> getByRec() {
		return ingredientRepository.findByRecipe(recipe);
	}
	public Optional<Ingredient> getByMealType(){
		return ingredientRepository.findByMealType(mealType );
		
	}
	
	public Optional<Ingredient> getByID(){
		return ingredientRepository.findById(ingID);
	}

}
