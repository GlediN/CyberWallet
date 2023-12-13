import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-transaction-succes-page',
  templateUrl: './transaction-succes-page.component.html',
  styleUrl: './transaction-succes-page.component.scss'
})
export class TransactionSuccesPageComponent {
  constructor(private modalService: NgbModal) {
  }
  closeForm() {
    this.modalService.dismissAll();
  }
}
