package com.p2.recApp.recipes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/




@Entity
@Table(name="pending_recipes")

public class PendingRecipe  {
	
	@Id
	
	@GeneratedValue(
			strategy = GenerationType.IDENTITY
			)
	
	@Column(name="recID")
	private Integer ingID;

	@Column(name= "rec_name")
	private String ingName;
		
	@Column(name= "meal_type")
	private String mealType;
	
	@Column(name="ing1")
	private String ing1;
	
	@Column(name="ing2")
	private String ing2;
	
	@Column(name="ing3")
	private String ing3;
	
	@Column(name="ing4")
	private String ing4;
	
	@Column(name="ing5")
	private String ing5;
	
	@Column(name="status")
	private String status;

	public Integer getIngID() {
		return ingID;
	}

	public void setIngID(Integer ingID) {
		this.ingID = ingID;
	}

	public String getIngName() {
		return ingName;
	}

	public void setIngName(String ingName) {
		this.ingName = ingName;
	}

	public String getMealType() {
		return mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

	public String getIng1() {
		return ing1;
	}

	public void setIng1(String ing1) {
		this.ing1 = ing1;
	}

	public String getIng2() {
		return ing2;
	}

	public void setIng2(String ing2) {
		this.ing2 = ing2;
	}

	public String getIng3() {
		return ing3;
	}

	public void setIng3(String ing3) {
		this.ing3 = ing3;
	}

	public String getIng4() {
		return ing4;
	}

	public void setIng4(String ing4) {
		this.ing4 = ing4;
	}

	public String getIng5() {
		return ing5;
	}

	public void setIng5(String ing5) {
		this.ing5 = ing5;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public PendingRecipe(Integer ingID, String ingName, String mealType, String ing1, String ing2, String ing3,
			String ing4, String ing5, String status) {
		super();
		this.ingID = ingID;
		this.ingName = ingName;
		this.mealType = mealType;
		this.ing1 = ing1;
		this.ing2 = ing2;
		this.ing3 = ing3;
		this.ing4 = ing4;
		this.ing5 = ing5;
		this.status = status;
	}

	public PendingRecipe() {
		super();
	}
	
	
	
}
