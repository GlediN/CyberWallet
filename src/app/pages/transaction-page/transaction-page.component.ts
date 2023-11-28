import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  constructor(private modalService:NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }
}
