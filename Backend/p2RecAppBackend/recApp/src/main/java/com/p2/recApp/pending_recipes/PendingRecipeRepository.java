package com.p2.recApp.pending_recipes;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import javax.transaction.Transactional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;

import com.p2.recApp.recipes.Recipe;
@Repository
@Transactional()
public class PendingRecipeRepository implements JpaRepository<PendingRecipe, Integer> {

	private Optional<PendingRecipe> recipe;
	private boolean exists;
	private List<PendingRecipe> allRecipes;

	public PendingRecipe findByRecName(PendingRecipe pendingRecipe) {
		// TODO Auto-generated method stub
		return pendingRecipe;
	}
	
	@Override
	public Page<PendingRecipe> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<PendingRecipe> findById(Integer id) {
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
	public void delete(PendingRecipe entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllById(Iterable<? extends Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends PendingRecipe> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends PendingRecipe> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends PendingRecipe> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <S extends PendingRecipe, R> R findBy(Example<S> example,
			Function<FetchableFluentQuery<S>, R> queryFunction) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PendingRecipe> findAll() {
		// TODO Auto-generated method stub
		return allRecipes;
	}

	@Override
	public List<PendingRecipe> findAll(Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PendingRecipe> findAllById(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> List<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends PendingRecipe> S saveAndFlush(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> List<S> saveAllAndFlush(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAllInBatch(Iterable<PendingRecipe> entities) {
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
	public PendingRecipe getOne(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PendingRecipe getById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends PendingRecipe> List<S> findAll(Example<S> example, Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

}
