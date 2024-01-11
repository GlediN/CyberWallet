import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../../user.service";
import {SignupSuccessPageComponent} from "../../Response  Pages/signup-success-page/signup-success-page.component";
import {SignupFailedPageComponent} from "../../Response  Pages/signup-failed-page/signup-failed-page.component";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  email='';
  password='';
  name='';
  address='';

  signUpFailed = false;
  errorMessage: string = '';

  constructor(private modalService:NgbModal,private userService:UserService){}
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }
  signUp(){
    const data={
      email:this.email,
      password:this.password,
      name:this.password,
      address:this.address
    }
    this.userService.signup(data).subscribe(
      (response) => {
        // Handle the response
        // this.modalService.dismissAll()
        // this.modalService.open(SignupSuccessPageComponent)

      },
      (error) => {
        this.signUpFailed = true;
        this.errorMessage = 'Sign up failed. Please check your information.';
        // this.modalService.dismissAll()
        // this.modalService.open(SignupFailedPageComponent)
        console.error('Error fetching recent transactions:', error);
      }
    )
  }
}
