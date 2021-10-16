import { Component, OnInit } from '@angular/core';
// import swal from 'Sweetalert';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-practise-home',
  templateUrl: './practise-home.component.html',
  styleUrls: ['./practise-home.component.css'],
})
export class PractiseHomeComponent implements OnInit {
  constructor(private router: Router, private localStorage: LocalStorage) {}
  show_nav: boolean;
  ngOnInit(): void {
    this.show_nav = false;
  }
  show() {
    this.show_nav = !this.show_nav;
  }


  logout(): void {

    let isLogOut = confirm("Are you sure you want to log out?");

    if(isLogOut) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
    // swal({
    //   text: 'Are you sure ?',
    //   buttons: ['No', 'Yes, Logout'],
    // }).then((result) => {
    //   if (result) {
    //     localStorage.clear();
    //     this.router.navigate(['/login']);
    //   }
    // });
  }
  goHome() {
    this.router.navigateByUrl('/home');
  }
  goProfile() {
    this.router.navigateByUrl('/profile');
  }
  goSettings() {
    this.router.navigateByUrl('/settings');
  }
}
