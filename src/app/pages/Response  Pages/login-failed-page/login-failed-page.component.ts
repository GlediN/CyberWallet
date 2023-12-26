import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-failed-page',
  templateUrl: './login-failed-page.component.html',
  styleUrl: './login-failed-page.component.scss'
})
export class LoginFailedPageComponent {
  constructor(private modalService: NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
