import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  // standalone: true,
  // imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    this.logout()
  }
  logout() {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'No',
      cancelButtonColor: '#a77325db',
      confirmButtonColor: '#a77325db',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();

        this.router.navigate(['/']);
      }
      this.router.navigate(['/']);

    });
  }
}
