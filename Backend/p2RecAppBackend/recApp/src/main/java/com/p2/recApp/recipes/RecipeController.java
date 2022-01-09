package com.p2.recApp.recipes;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.p2.recApp.ingredients.IngredientService;
import com.p2.recApp.recipes.Recipe;
import com.p2.recApp.recipes.RecipeRepository;

@RestController
@RequestMapping("/api/v1/recipes/users")
@CrossOrigin("*")
public class RecipeController {
	
	private final EntityManager manager;
	private RecipeRepository recipeRepo;
	private Recipe recipe;
	private String recName;

	@Autowired
	public RecipeController(RecipeRepository recipeRepo, Recipe recipe, EntityManager manager) {
		this.recipeRepo = recipeRepo;
		this.recipe = recipe;
		this.manager = manager;
	}
	
	

	@PostMapping("/add")
	public String addRecipe(

			@RequestBody Recipe recipe) {

		System.out.println("pending"+ recipe);
		recipe.setStatus("pending");
		System.out.println("pending"+ recipe);
		recipeRepo.save(recipe);

		 return "I did it";
	}

	@GetMapping("/all-recipes")
	public List<Recipe> allRecipes(){
		return recipeRepo.findAll();
	}

	@GetMapping("/{recipe}")
	public Optional<Recipe> getRecipe(){
		return recipeRepo.findByRecName(recName);
	}
	
	@GetMapping("/pending")
	public List<Recipe> getPendingRec(){
		System.out.println(recipeRepo.findByStatus("pending"));
		return recipeRepo.findByStatus("pending");
	}
	
	@GetMapping("/approved")
	public List<Recipe> getApprovedRec(){
		System.out.println(recipeRepo.findByStatus("approved"));
		return recipeRepo.findByStatus("approve");
	}
	
	@PostMapping("/admin-approve/{recipe}")
	public String approveRec(
			@PathVariable("recipe") String recName{
		
		System.out.println(recName);
		Recipe newRecipe = new Recipe();
		Optional<Recipe> recipe = recipeRepo.findByRecName(recName);
		System.out.println(recipeRepo.findByRecName(recName));
		//old info
//		Integer ID = recipe.getRecID();
//		String name = recipe.getRecName();
//		String meal = recipe.getMealType();
//		String ing1 = recipe.getIng1();
//		String ing2 = recipe.getIng2();
//		String ing3 = recipe.getIng3();
//		String ing4 = recipe.getIng4();
//		String ing5 = recipe.getIng5();
		
		System.out.println(recipe);
		//new info 
		newRecipe = recipe;
		newRecipe.setRecName(name);
		newRecipe.setMealType(meal);
		newRecipe.setIng1(ing1);
		newRecipe.setIng2(ing2);
		newRecipe.setIng3(ing3);
		newRecipe.setIng4(ing4);
		newRecipe.setIng5(ing5);
		newRecipe.setStatus("approved");
		System.out.println(recipe.getStatus(recName));
		
		//save new rec/insert into DB
		recipeRepo.save(newRecipe);
		
		//find and delete old entry
		
		
		 recipeRepo.deleteById(ID);
		
		System.out.println();
		return "recipe successfully added!";
		
	}






}


