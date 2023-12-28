import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-edited-succesfully-page',
  templateUrl: './user-edited-succesfully-page.component.html',
  styleUrl: './user-edited-succesfully-page.component.scss'
})
export class UserEditedSuccesfullyPageComponent {
  constructor(private modalService: NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
