import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-editing-failed',
  templateUrl: './user-editing-failed.component.html',
  styleUrl: './user-editing-failed.component.scss'
})
export class UserEditingFailedComponent {
  constructor(private modalService:NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
