package com.p2.recApp.recipes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/recipes")
@CrossOrigin("*")
public class RecipeController {
	
	@Autowired
	RecipeRepository recipeRepo;
	private Recipe recipe;
	@PostMapping("/add")
	public Recipe addRecipe(
//			@RequestParam("ingredient1")
//			@RequestParam("ingredient2")
//			@RequestParam("ingredient3")
			@RequestParam("ingredients") Recipe recipe) {
		
				return recipeRepo.save(recipe);
		
	}
	
	@GetMapping("/all-recipes")
	public List<Recipe> allRecipes(){
		return recipeRepo.findAll();
	}
	
	@GetMapping("/{recipe}")
	public Recipe getRecipe(){
		return recipeRepo.findByRecName(recipe);
	}
	
	
	
}


