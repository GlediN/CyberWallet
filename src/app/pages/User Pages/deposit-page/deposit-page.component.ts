import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
import {TransactionSuccesPageComponent} from "../../Response  Pages/transaction-succes-page/transaction-succes-page.component";
import {TransactionFailedPageComponent} from "../../Response  Pages/transaction-failed-page/transaction-failed-page.component";

@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrl: './deposit-page.component.scss'
})
export class DepositPageComponent {
  constructor(private modalService: NgbModal, private transactionService: TransactionService, private router: Router) {
  }
  code:string='';
  amount:number=0;
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }

  transaction() {
    let email = sessionStorage.getItem("email");
    if(!email) {
      this.modalService.dismissAll();
      this.modalService.open(TransactionFailedPageComponent)
      console.error("Email not found in session storage");
      return;
    }

    const transactionDetails = {
      code:this.code,
      amount: this.amount,
      email: email,
    };

    this.transactionService.deposit(transactionDetails).subscribe(
      (error) => {
        console.log(transactionDetails);
        this.modalService.open(TransactionSuccesPageComponent)
      },
      (error) => {
        this.modalService.open(TransactionFailedPageComponent);
        console.error('Transaction failed:', error);
      }
    );
    this.modalService.dismissAll();
  }
}
