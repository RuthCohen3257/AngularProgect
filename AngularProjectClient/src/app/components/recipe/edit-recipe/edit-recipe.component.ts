import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../../../models/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent {
  preparationStepsArray: any;
  ingredients:string[]=[];
  categories: Category[] = [];
  recipeForm!: FormGroup;
  recipe!: Recipe;
  currentRecipeId!:number;
  
  firstFormGroup = this._formBuilder.group({
    recipeName: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    categoryCode: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    preparationTimeInMinutes: ['', Validators.required]
  });
  forthFormGroup = this._formBuilder.group({
    difficultyLevel: ['', Validators.required]
  });
  fifthFormGroup = this._formBuilder.group({
    preparationSteps: ['', Validators.required]
    });
  sixthFormGroup = this._formBuilder.group({
    ingredients: ['', Validators.required]
  });
  seventhFormGroup = this._formBuilder.group({
    imageRoute: ['/assets/recipe-images/3.jpg', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, private recipeService: RecipeService, private router: Router, private categoryService: CategoryService,
  ) { }
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
    this.currentRecipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadrecipeToTheInputs(this.currentRecipeId);
    this.loadCategories();
  }
  loadrecipeToTheInputs(id: number|null) {
    this.recipeService.getById(Number(id))
      .subscribe(r => {
        console.log(r);
        this.recipe = r;

        this.firstFormGroup.patchValue({recipeName: this.recipe.recipeName});
        this.secondFormGroup.patchValue({ categoryCode: this.recipe.categoryId.toString() });
        this.thirdFormGroup.patchValue({ preparationTimeInMinutes: this.recipe.preparationTimeInMinutes.toString() });
        this.forthFormGroup.patchValue({ difficultyLevel: this.recipe.difficultyLevel.toString() });
        this.fifthFormGroup.patchValue({ preparationSteps: this.recipe.preparationSteps.join("\n") });
        this.sixthFormGroup.patchValue({ ingredients: this.recipe.ingredients.join("\n") });
        this.seventhFormGroup.patchValue({ imageRoute: this.recipe.imageUrl });
      })
  }

  saveChanges() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save changes",
      denyButtonText: `Don't save`,
      cancelButtonColor: '#FFFFFF',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        if (this.recipeForm.valid) {
          const userId: any = sessionStorage.getItem('userId');
          console.log("-----usercode---", userId)
          this.recipe = {
            recipeId:this.currentRecipeId,
            recipeName: this.firstFormGroup.value.recipeName!,
            categoryId: Number(this.secondFormGroup.value.categoryCode),
            preparationTimeInMinutes: Number(this.thirdFormGroup.value.preparationTimeInMinutes),
            difficultyLevel: Number(this.forthFormGroup.value.difficultyLevel),
            creationDate: new Date(),
            ingredients: (this.sixthFormGroup.value.ingredients?.split('\n') as string[]) || [],
            preparationSteps: (this.fifthFormGroup.value.preparationSteps?.split('\n') as string[]) || [],
            userId: parseInt(userId),
            imageUrl: this.seventhFormGroup.value.imageRoute!,
            
          };
          
            this.recipeService.updateRecipe(this.recipe).subscribe({
              next: (res) => {
                Swal.fire({
                  icon: 'success',
                  title: 'The recipe update successfully',
                  text: 'See You!'
                });
                console.log("the recipe update successfully");
                Swal.fire("Saved!", "", "success");
                this.router.navigate(['/recipe/recipes-list']);
              },
              error: (err) => {
                console.log(err);
                Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'An error occurred while fetching update.'
                });
              }
            })    
        }
        else{
          Swal.fire({
            icon: 'error',
            title: ' Error!',
            text: 'please fill out all the form.'
          });
          console.log("please fill out all the form");
          
        }
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.router.navigate(['/recipe/recipes-list']);
      }
    });
  }

  loadCategories(){
    this.categoryService.getCategories()
    .subscribe(c=>{
      this.categories=c;
    });
  }

  compareCategory(o1: any, o2: any): boolean {
    return o1.segName === o2.segName && o1.id === o2.id;
  }
}