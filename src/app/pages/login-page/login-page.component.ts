import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {UserService} from "../../user.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private modalService:NgbModal,private userService:UserService,
              private router:Router) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }


  email: string = "";
  password: string = "";
  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };
    this.userService.login(credentials).subscribe(
      (response: any) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('email', response.email)
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
    this.modalService.dismissAll();
  }
}
