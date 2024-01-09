import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-signup-success-page',
  templateUrl: './signup-success-page.component.html',
  styleUrl: './signup-success-page.component.scss'
})
export class SignupSuccessPageComponent {
  constructor(private modalService: NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
