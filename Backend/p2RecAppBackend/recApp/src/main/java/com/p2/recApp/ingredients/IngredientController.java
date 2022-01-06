package com.p2.recApp.ingredients;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.p2.recApp.users.User;
import com.p2.recApp.users.UserService;

@RestController
@RequestMapping("/api/v1/recipes")
@CrossOrigin("*")
public class IngredientController {
	
	private final IngredientService ingredientService;
	@Autowired
	public IngredientController(IngredientService ingredientService) {
		this.ingredientService = ingredientService;
	}
	
	@GetMapping
	public List<Ingredient> getAllIng(){
		return ingredientService.getAllIng();
	}
	
	@GetMapping("/{recipe}")
	public List<Ingredient> getByRec(@PathVariable("recipe") String recipe){
		return ingredientService.getByRec(recipe);
	}
	
	@GetMapping("/all-recipes")
	public List<Ingredient> getAllRec(@PathVariable("recipe") String recipe){
		return ingredientService.getByRec(recipe);
	}
	
	//hard code this
	

}
