import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-signup-failed-page',
  templateUrl: './signup-failed-page.component.html',
  styleUrl: './signup-failed-page.component.scss'
})
export class SignupFailedPageComponent {
  constructor(private modalService: NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
