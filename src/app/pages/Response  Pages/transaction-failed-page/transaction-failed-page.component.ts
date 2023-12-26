import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-transaction-failed-page',
  templateUrl: './transaction-failed-page.component.html',
  styleUrl: './transaction-failed-page.component.scss'
})
export class TransactionFailedPageComponent {
  constructor(private modalService: NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
