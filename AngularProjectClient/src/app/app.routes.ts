import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home-page/home-page.component').then(c => c.HomePageComponent) },
    { path: 'recipe', loadChildren: () => import('./components/recipe/recipe.module').then(c => c.RecipeModule) },
    { path: 'user', loadChildren: () => import('./components/user/user.module').then(c => c.UserModule) },
    { path: '**', component: NotFoundComponent }];

