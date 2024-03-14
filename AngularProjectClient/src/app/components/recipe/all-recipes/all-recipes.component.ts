import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import 'animate.css';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})

export class AllRecipesComponent implements OnInit {
  sidebarVisible2: boolean = false;
  disabled = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  value = 0;
  value1!: number;
  filteredRecipes: Recipe[] = [];
  recipesList: Recipe[] = [];
  selectedCategories: number[] = []; // Selected categories for filtering
  recipeNameFilter: string = '';
  
  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this._recipeService.getRecipes().subscribe({
      next: (res) => {
        this.recipesList = res;
        this.filteredRecipes = [...this.recipesList];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterByTime(v: number): void {
    this.value1 = v;
    this.filterRecipes();
  }

  // Function to filter recipes based on difficulty level
  filterByDifficulty(v: number): void {
    this.value = v;
    this.filterRecipes();
  }

  // Function to filter recipes based on selected categories
  filterByCategory(category: number): void {
    const index = this.selectedCategories.indexOf(category);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterRecipes();
  }

  filterByName(): void {
    this.filterRecipes();
  }

  // Function to apply all filters and update filteredRecipes
  filterRecipes(): void {
    this.filteredRecipes = this.recipesList.filter(recipe => {
      const timeFilter = this.value1 === 0 || recipe.preparationTimeInMinutes <= this.value1;
      const difficultyFilter = this.value === 0 || recipe.difficultyLevel <= this.value;
      const nameFilter = this.recipeNameFilter === '' || recipe.recipeName.toLowerCase().includes(this.recipeNameFilter.toLowerCase());
      const categoryFilter = this.selectedCategories.length === 0 || this.selectedCategories.includes(recipe.categoryId);
      return timeFilter && difficultyFilter && categoryFilter && nameFilter;
    });
  }
}
