import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { UserRoutingModule } from './user-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogoutComponent],
  imports: [CommonModule,UserRoutingModule,MatCheckboxModule,FormsModule, MatFormFieldModule, CommonModule,
     MatInputModule,ReactiveFormsModule, MatButtonModule, MatIconModule,MatCardModule ],
  exports: [CommonModule,UserRoutingModule]
})

export class UserModule { }
