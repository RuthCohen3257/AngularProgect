import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { PreparationTimePipe } from './preparation-time.pipe';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DifficultyLevelPipe } from "./difficulty-level.pipe";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [AddRecipeComponent, AllRecipesComponent, EditRecipeComponent,
        RecipeDetailsComponent, SmallRecipeComponent],
    exports: [CommonModule, RecipeRoutingModule],
    imports: [
        CommonModule, RecipeRoutingModule, MatCardModule, MatButtonModule,
        MatStepperModule,MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,ButtonModule,
        MatInputModule,
        MatSelectModule,SidebarModule,
        PreparationTimePipe,
        MatChipsModule,
        CdkDropList,
        CdkDrag,
        MatIconModule,
        DifficultyLevelPipe,
        MatSidenavModule,
        MatSliderModule
    ]
})
export class RecipeModule { }