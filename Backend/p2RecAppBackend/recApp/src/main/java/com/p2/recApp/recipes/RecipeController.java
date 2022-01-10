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
//	@Autowired
//	private final EntityManager manager = null;
	@Autowired
	private RecipeRepository recipeRepository;
	@Autowired
	private Recipe recipe;
	private String recName;

//	@Autowired
//	public RecipeController(RecipeRepository recipeRepository, Recipe recipe, EntityManager manager) {
//		this.recipeRepository = recipeRepository;
//		this.recipe = recipe;
//		this.manager = manager;
//	}
	

	@PostMapping("/add/{recName}/{mealType}/{ing1}/{ing2}/{ing3}/{ing4}/{ing5}")
	public String addRecipe(
			@PathVariable String recName,
			@PathVariable String mealType,
			@PathVariable String ing1,
			@PathVariable String ing2,
			@PathVariable String ing3,
			@PathVariable String ing4,
			@PathVariable String ing5) {
		
		Recipe newRecipe = new Recipe(recName, mealType, ing1, ing2, ing3, ing4, ing5);
		newRecipe.setStatus("pending");
		System.out.println("pending *************"+ newRecipe);
		recipeRepository.save(newRecipe);

		 return "I did it";
	}

	@GetMapping("/all-recipes")
	public List<Recipe> allRecipes(){
		return recipeRepository.findAll();
	}

//	@GetMapping("/{recipe}")
//	public Optional<Recipe> getRecipe(){
//		return recipeRepo.findByRecName(recName);
//	}
	
	@GetMapping("/pending")
	public List<Recipe> getPendingRec(){
		System.out.println(recipeRepository.findByStatus("pending"));
		return recipeRepository.findByStatus("pending");
	}
	
	@GetMapping("/approved")
	public List<Recipe> getApprovedRec(){
		System.out.println(recipeRepository.findByStatus("approved"));
		return recipeRepository.findByStatus("approve");
	}
	
	@PostMapping("/admin-approve/{recName}/{mealType}/{ing1}/{ing2}/{ing3}/{ing4}/{ing5}/{approve}")
	public String approveRec(
			@PathVariable String recName,
			@PathVariable String mealType,
			@PathVariable String ing1,
			@PathVariable String ing2,
			@PathVariable String ing3,
			@PathVariable String ing4,
			@PathVariable String ing5,
			@PathVariable String approve){
		
		List<Recipe> oldRecipe = recipeRepository.findByRecName(recName);
		System.out.println("oldRecipe ********" + oldRecipe);
		
		recipeRepository.deleteAll(oldRecipe);
	
		
		Recipe newRecipe = new Recipe(recName, mealType, ing1, ing2, ing3, ing4, ing5, approve);
		System.out.println("newRecipe ********" + newRecipe);
		recipeRepository.save(newRecipe);
		//recipeRepository.
		
//		Optional<Recipe> oldRecipe = recipeRepository.findByRecName(recName);
	
		
//		Recipe newRecip = new Recipe();
//		System.out.println("newRecip ********" + oldRecipe);
//		
		//old info
//		Integer ID = recipe.getRecID();
//		String name = recipe.getRecName();
//		String meal = recipe.getMealType();
//		String ing1 = recipe.getIng1();
//		String ing2 = recipe.getIng2();
//		String ing3 = recipe.getIng3();
//		String ing4 = recipe.getIng4();
//		String ing5 = recipe.getIng5();
		
//		System.out.println(recipe);
//		//new info 
//		newRecipe = recipe;
//		newRecipe.setRecName(name);
//		newRecipe.setMealType(meal);
//		newRecipe.setIng1(ing1);
//		newRecipe.setIng2(ing2);
//		newRecipe.setIng3(ing3);
//		newRecipe.setIng4(ing4);
//		newRecipe.setIng5(ing5);
//		newRecipe.setStatus("approved");
//		System.out.println(recipe.getStatus(recName));
//		
//		//save new rec/insert into DB
//		recipeRepo.save(newRecipe);
//		
//		//find and delete old entry
//		
//		
//		 recipeRepo.deleteById(ID);
//		
//		System.out.println();
		return "recipe successfully added!";
		
	}

}
