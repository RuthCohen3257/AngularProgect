import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { CategoryService } from '../category.service';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
import { Category } from '../../../models/category.model';
import { User } from '../../../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  recipe!: Recipe;
  category!: Category;
  user!: User;
  index!: number | any;
  isLiked: boolean = false;
  currentUserCode!: number;

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.queryParamMap.get('index');
    console.log("index", this.index);

    // Fetch current user code from storage
    this.currentUserCode = sessionStorage.getItem('userId') ? JSON.parse(sessionStorage.getItem('userId')!) : null;

    this.recipeService.getById(this.index).subscribe({
      next: (res) => {
        this.recipe = res;

        // Fetch category details
        this.categoryService.getById(this.recipe.categoryId).subscribe({
          next: (category) => {
            this.category = category;
            console.log("catefory",category)
          },
          error: (err) => {
            console.log(err);
          }
        });

         // Fetch user details
         this.userService.getById(this.recipe.userId).subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getDifficultyIcons(difficultyLevel: number): number[] {
    return Array(difficultyLevel).fill(0);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    setTimeout(() => {
      this.isLiked = false;
    }, 1000); 
  }


  
  isCurrentUserRecipeOwner(): boolean {
    // בדיקה אם המשתמש הנוכחי קיים בזיכרון והוא הוא המשתמש שערך את המתכון
    return this.currentUserCode !== null && this.currentUserCode === this.recipe.userId;
} 


deleteRecipe() {
    if (this.currentUserCode !== null && this.currentUserCode === this.recipe.userId) {
      Swal.fire({
        title: 'האם הינך בטוח שברצונך למחוק את המתכון?',
        text: "לא תהיה אפשרות לבטל את הפעולה פעם שהיא נעשתה",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'כן, מחק את המתכון'
      }).then((result) => {
        if (result.isConfirmed) {
          // ביצוע פעולת המחיקה כאן
          this.recipeService.deleteRecipe(this.recipe.recipeId).subscribe({
            next: () => {
              Swal.fire(
                'נמחק!',
                'המתכון נמחק בהצלחה.',
                'success'
              );
              // הפניה לרשימת המתכונים
              this.router.navigate(['/recipe']);
            },
            error: (err) => {
              console.log(err);
              Swal.fire(
                'שגיאה!',
                'אירעה שגיאה במחיקת המתכון.',
                'error'
              );
            }
          });
        }
      });
    } else {
      // אם המשתמש הנוכחי אינו היוצר של המתכון, הצג הודעה שהוא אינו מורשה לבצע מחיקה
      Swal.fire(
        'המשתמש אינו מורשה',
        'רק היוצר של המתכון יכול לבצע מחיקה.',
        'error'
      );
    }
  }

  
}
