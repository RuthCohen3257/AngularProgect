import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { Route, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const RECIPE_ROUTES: Route[] = [
  { path: '', redirectTo: 'recipes-list', pathMatch: 'full' },
  { path: 'add', component:AddRecipeComponent },
  { path: 'recipes-list', component:AllRecipesComponent },
  { path: 'recipes-list/:id/edit', component: EditRecipeComponent,  canActivate: [] },
  { path: 'recipes-list/:id', component: RecipeDetailsComponent, canActivate: [] },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(RECIPE_ROUTES)
  ],
  exports: [RouterModule]

})
export class RecipeRoutingModule { }
