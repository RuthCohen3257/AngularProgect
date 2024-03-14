import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;
  categories: Category[] = [];

 

  firstFormGroup = this._formBuilder.group({
    recipeName: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    categoryCode: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    preparationTime: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    difficultyLevel: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    preparationSteps: this._formBuilder.array([]),
  });
  sixthFormGroup = this._formBuilder.group({
    ingredients: this._formBuilder.array([]),
  });
  seventhFormGroup = this._formBuilder.group({
    imageRoute: ['/assets/recipe-images/3.jpg', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private recipeService: RecipeService, private router: Router,private categoryService:CategoryService) { }
  ngOnInit(): void {
    this.recipeForm = this._formBuilder.group({
      firstFormGroup: this.firstFormGroup,
      secondFormGroup: this.secondFormGroup,
      thirdFormGroup: this.thirdFormGroup,
      forthFormGroup: this.forthFormGroup,
      fifthFormGroup: this.fifthFormGroup,
      sixthFormGroup: this.sixthFormGroup,
      seventhFormGroup: this.seventhFormGroup
    });
    console.log( this.recipeForm); 
    this.loadCategories();   
  }

  get ingredients(): FormArray {
    return this.sixthFormGroup.get('ingredients') as FormArray;
  }
  get preparationStepsArray(): FormArray {
    return this.fifthFormGroup.get('preparationSteps') as FormArray;
  }

  addIngredients(): void {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredients(index: number): void {
    this.ingredients.removeAt(index);
    
  }

  addStep(): void {
    this.preparationStepsArray.push(new FormControl(''));
  }

  removeStep(index: number): void {
     this.preparationStepsArray.removeAt(index);
  }

  addRecipe() {
    console.log(this.recipeForm.value);
    
    if(!sessionStorage.getItem('userId')){
      Swal.fire({
        icon: 'error',
        title: ' No permission to add a recipe!',
        text: 'You must first log in.'
      });
      this.router.navigate(['/user/login']);
    }
    if (this.recipeForm.valid) {
      const userId: any = sessionStorage.getItem('userId');
      console.log("-----usercode---", userId)
      const newRecipe: Recipe = {
        recipeId: 0,
        recipeName: this.firstFormGroup.value.recipeName!,
        categoryId: Number(this.secondFormGroup.value.categoryCode),
        preparationTimeInMinutes: Number(this.thirdFormGroup.value.preparationTime),
        difficultyLevel: Number(this.forthFormGroup.value.difficultyLevel),
        creationDate: new Date(),
        ingredients: this.ingredients.value,
        preparationSteps: this.preparationStepsArray.value,
        userId: parseInt(userId),
        imageUrl: this.seventhFormGroup.value.imageRoute!,
        
      };
      console.log(newRecipe);

      // if (this.recipeForm.valid) {
        this.recipeService.addRecipe(newRecipe).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'The recipe added successfully',
              text: 'Thank You!'
            });
            console.log("the recipe added successfully");
            this.router.navigate(['/recipe/recipes-list']);
          },
          error: (err) => {
            console.log(err);
          }
        })
      // }
    }
    else{
      Swal.fire({
        icon: 'error',
        title: ' Error!',
        text: 'please fill out all the form.'
      });
      console.log("please fill out all the form");
      
    }
  }
  loadCategories(){
    this.categoryService.getCategories()
    .subscribe(c=>{
      this.categories=c;
    });
  }
}

