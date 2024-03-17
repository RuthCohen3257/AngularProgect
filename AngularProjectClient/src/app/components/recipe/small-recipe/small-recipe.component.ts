
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../../models/recipe.model';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss',

})
export class SmallRecipeComponent implements OnInit {
  isHovered: boolean = false;
  // userName!: string;
  @Input() recipe!: Recipe;
  icon: any;
  createdByUserCode!: number;
  createdByUsername!: string;

  constructor(private router: Router, private _recipe: RecipeService, private _user: UserService, private categoryService: CategoryService, private recipeService: RecipeService, private userService: UserService) { }
  ngOnInit(): void {
    this.icon = this.categoryIcon();
    this.userService.getById(this.recipe.userId).subscribe({
        next: (res) => {
          this.createdByUsername = res.name;
          console.log("this.createdByUserCode ",this.createdByUserCode );
        },
        error: (err) => {
          console.log("*************error************");
          console.error(err);
        }
      });
  }


  onMouseEnter() {
    this.isHovered = true;
  }
  onMouseLeave() {
    this.isHovered = false;
  }
  toRecipeDetails() {
    if (sessionStorage.getItem("user")) {
      this.router.navigate(['recipe/recipes-list', this.recipe.recipeId], { queryParams: { index: this.recipe.recipeId } })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: ' No permission to view the recipe!',
        text: 'Username or password not found in session storage.'
      });
      console.log('Username or password not found in local storage.');
      this.router.navigate(['user/login']);
    }
  }
  editRecipe() {
    if (sessionStorage.getItem('userId') === JSON.stringify(this.recipe.userId)) {
      this.router.navigate([`recipe/recipes-list/${this.recipe.recipeId}/edit`])
    }
    else {
      Swal.fire({
      icon: 'error',
      title: ' No permission to edit the recipe!',
      text: 'User does not have permission to edit the recipe.'
    });
      console.log("No permission to edit the recipe.")
    }
  }
  deleteRecipe() {
    if (sessionStorage.getItem('userId') === JSON.stringify(this.recipe.userId)) {
      this._recipe.getById(this.recipe.recipeId).subscribe({ // Corrected method name
        next: () => {
          console.log('Recipe deleted successfully!');
          // Remove the component visually
          //this.removeComponentFromDOM();
          this._recipe.deleteRecipe(this.recipe.recipeId).subscribe({
            next:()=>{
              Swal.fire({
                icon: 'success',
                title: 'The recipe deleted successfully!',
                text: 'See you!.'
              }).then(() => {
                setTimeout(() => {
                  location.reload();
                }, 1000);
              })
              //this.router.navigate(['recipe/recipes-list']);
            },
            error:()=>{
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while fetching recipe.'
              });
            }
          })
          // Optional: Redirect or refresh the page
          this.router.navigate(['recipe/recipes-list']);
        },
        error: (error) => {
          console.error('Error deleting recipe:', error);
          console.log("No permission to edit the recipe.");
          Swal.fire({
            icon: 'error',
            title: ' No permission to delete the recipe!',
            text: 'Only the owner can delete it.'
          });
          //alert('Failed to delete recipe. Please try again.');
        }
      });
    } else {
      console.log("No permission to edit the recipe.");
      //alert('You don\'t have permission to delete this recipe.');
      Swal.fire({
        icon: 'error',
        title: ' No permission to delete the recipe!',
        text: 'Only the owner can delete it.'
      });
    }
  }
  removeComponentFromDOM() {
    // גישה לרכיב DOM באמצעות מזהה ייחודי
    const element = document.getElementById(`recipe/recipes-list/${this.recipe.recipeId}`);
    // הסרת הרכיב מה-DOM
    if (element) {
      element.removeChild(element);
    } else {
      console.warn('No recipe component found to remove.');
    }
  }

  categoryIcon(): string {
    console.log(this.recipe)
    this.categoryService.getById(this.recipe.categoryId).subscribe({
      next: (res) => {
        this.icon = res.iconRoute;
      },
      error: (error) => {
        console.error('Error matching the category:', error);
      }
    });
    console.log(this.icon)

    return this.icon
  }


}




