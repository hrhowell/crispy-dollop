package com.p2.recApp.recipes;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.p2.recApp.ingredients.Ingredient;
import com.p2.recApp.pending_recipes.PendingRecipe;
import com.p2.recApp.pending_recipes.PendingRecipeRepository;
import com.p2.recApp.users.User;

@Repository
@Transactional()
public class RecipeRepository implements JpaRepository<Recipe, Integer>{
	
	private Optional<Recipe> recipe;
	private boolean exists;
	private List<Recipe> allRecipes;
	
	private PendingRecipeRepository pendingRepo;

	public Recipe findByRecName(Recipe recipe) {
		// TODO Auto-generated method stub
		return recipe;
	}
	
	//this saves from the pending table to the recipe table, but might have bugs
	public void addFromPending(PendingRecipe pendingRecipe) {
		
		PendingRecipe pendingRec = pendingRepo.findByRecName(pendingRecipe);
		pendingRepo.delete(pendingRecipe);
		String holder = pendingRec.toString();
		Object holder1 = holder;
		Recipe recipe = (Recipe) holder1;
		save(recipe);
		return;
		
	}

	@Override
	public Page<Recipe> findAll(Pageable pageable) {
		
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Recipe> findById(Integer id) {
		// TODO Auto-generated method stub
		return recipe;
	}

	@Override
	public boolean existsById(Integer id) {
		// TODO Auto-generated method stub
		return exists;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Recipe entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllById(Iterable<? extends Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Recipe> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends Recipe> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends Recipe> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <S extends Recipe, R> R findBy(Example<S> example, Function<FetchableFluentQuery<S>, R> queryFunction) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Recipe> findAll() {
		// TODO Auto-generated method stub
		return allRecipes;
	}

	@Override
	public List<Recipe> findAll(Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Recipe> findAllById(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> List<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends Recipe> S saveAndFlush(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> List<S> saveAllAndFlush(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAllInBatch(Iterable<Recipe> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllByIdInBatch(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllInBatch() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Recipe getOne(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Recipe getById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Recipe> List<S> findAll(Example<S> example, Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	

}
