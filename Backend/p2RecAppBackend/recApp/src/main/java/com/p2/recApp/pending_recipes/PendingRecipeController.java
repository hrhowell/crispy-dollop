package com.p2.recApp.pending_recipes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/recipes/users/")
@CrossOrigin("*")
public class PendingRecipeController {
	
	@Autowired
	PendingRecipeRepository pendingRepo;
	private PendingRecipe pendingRecipe;
	@PostMapping("/add/{}")
	public PendingRecipe addRecipe(
//			@RequestParam("ingredient1")
//			@RequestParam("ingredient2")
//			@RequestParam("ingredient3")
			@RequestParam("ingredients") PendingRecipe pendingRecipe) {
		
				return pendingRepo.save(pendingRecipe);
		
	}
	
	
	
	
	
}


