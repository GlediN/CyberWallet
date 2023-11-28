import {Component, NgZone} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private modalService:NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }
  email: string = "";
  password: string = "";

  login() {
    this.closeForm();
    // const credentials = {
    //   email: this.email,
    //   password: this.password
    // };
    // this.userService.login(credentials).subscribe(
    //   (response: any) => {
    //     sessionStorage.setItem('token', response.token);
    //     sessionStorage.setItem('email',response.email);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   (error) => {
    //     console.error('Login failed:', error);
    //   }
    // );
    // this.modalService.dismissAll();
  }
}
