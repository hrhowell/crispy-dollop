package com.p2.recApp.ingredients;

import java.util.ArrayList;
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
	private ArrayList<Recipe> recipes;
	private Recipe pancakes;
	private Recipe boba_tea;
	private Recipe punch;
	private Recipe orange_juice;
	private Recipe latte;
	private Recipe pavlova;
	private Recipe black_forest_gelato_with_ganache;
	private Recipe lemon_tart;
	private Recipe hummus;
	private Recipe fruit_stars;
	private Recipe celery_boats;
	private Recipe pad_thai;
	private Recipe pasta;
	private Recipe hamburger;
	private Recipe salad;
	private Recipe curry;
	private Recipe bento;
	private Recipe avocado_toast;
	private Recipe granola;
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
	public ArrayList<Recipe> getAllRec(){
		
		return recipes();
	}
	
	public ArrayList<Recipe> recipes(){
		
		recipes.add(pancakes);
		recipes.add(granola);
		recipes.add(avocado_toast);
		recipes.add(bento);
		recipes.add(curry);
		recipes.add(salad);
		recipes.add(hamburger);
		recipes.add(pasta);
		recipes.add(pad_thai);
		recipes.add(celery_boats);
		recipes.add(fruit_stars);
		recipes.add(hummus);
		recipes.add(lemon_tart);
		recipes.add(black_forest_gelato_with_ganache);
		recipes.add(pavlova);
		recipes.add(latte);
		recipes.add(orange_juice);
		recipes.add(punch);
		recipes.add(boba_tea);
		
		
		return recipes;
		
	}
	
	//hard code this
	

}
