import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import Swal from 'sweetalert2';

/** @title Form field appearance variants */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  hide = true;
  public loginForm!: FormGroup;
  public foundUsers!: User[];
  public isCorrPass!: boolean;
  showRotatingIcon = false
  userExists!: boolean;
  public timerInterval: any;
  public timer: any;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      "name": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const name = this.loginForm.get('name')?.value;
      const password = this.loginForm.get('password')?.value;
  
      this.userService.getUsers().subscribe(
        (users: User[]) => {
          console.log("users",users)
          console.log("this: ",name)
          this.userExists = users.some(user => user.name === name);
          if (this.userExists) {
            if (users.some(user => user.name === name && user.password === password)) {
                  sessionStorage.setItem('user', JSON.stringify(name));
                  sessionStorage.setItem('userId', JSON.stringify(users.find(user => user.name === name && user.password === password)?.id));
                  Swal.fire({
                    icon: 'success',
                    title: 'User Exists!',
                    text: 'User was found in the system.'
                  });
                  this.router.navigate(['/recipe/recipes-list']);
                }
                else {
                  Swal.fire({
                    icon: 'error',
                    title: ' Not correct password!',
                    text: 'User does not exist in the system.'
                  });
                }
              }
              else {
                Swal.fire({
                  title: "Redirected to registration page",
                  html: "You are being redirected to the registration page in <b></b> milliseconds.",
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading(null);
                    this.timer = Swal.getPopup()?.querySelector("b");
                    const timerInterval = setInterval(() => {
                      this.timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                    Swal.getPopup()?.addEventListener('mouseenter', () => clearInterval(timerInterval));
                    Swal.getPopup()?.addEventListener('mouseleave', () => this.timerInterval = setInterval(() => {
                      this.timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100));
                  },
                  willClose: () => {
                    clearInterval(this.timerInterval);
                  }
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                    this.router.navigate(['/user/register'], { queryParams: { userName: name } });
                  }
                });
              }
            },
            (error) => {
              console.log('Error occurred while fetching users:', error);
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while fetching users.'
              });
            }
          );
        } else {
          console.log('Form is invalid');
        }
      }
}

