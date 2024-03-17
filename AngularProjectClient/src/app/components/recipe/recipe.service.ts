import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public baseUrl = 'https://localhost:7064/api/Recipe'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl)
  }
  getById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`)
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    console.log(recipe)
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }
  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/${recipe.recipeId}`, recipe);
  }
  deleteRecipe(RecipeCode: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.baseUrl}/${RecipeCode}`);
  }
}
