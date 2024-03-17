import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-top-bar',
  standalone: true,

  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatInputModule,MatChipsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  imageUrl: string = "/assets/logo-images/8.png";
  userName: string | null = '';

  constructor(private u: UserService, private router: Router) { }

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      const user = JSON.parse(sessionStorage.getItem('user')!);
      if (user) {
        this.userName = user.Name;
      } else {
        this.userName = 'User';
      }
  }
 
}}
