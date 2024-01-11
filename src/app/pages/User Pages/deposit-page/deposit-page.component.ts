import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
import {TransactionSuccesPageComponent} from "../../Response  Pages/transaction-succes-page/transaction-succes-page.component";
import {TransactionFailedPageComponent} from "../../Response  Pages/transaction-failed-page/transaction-failed-page.component";
import {DepositService} from "../../../deposit.service";

@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrl: './deposit-page.component.scss'
})
export class DepositPageComponent {
  constructor(private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  code:string='';
  amount:number=0;
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }

  transactionFailed = false;
  errorMessage: string = '';

  transaction() {
   const transactionDetails = {
      code:this.code,
      amount: this.amount,
    }

    this.depositService.deposit(transactionDetails).subscribe(
      (error) => {
        this.modalService.dismissAll()
      },
      (error) => {
        this.transactionFailed=true;
        this.errorMessage = 'Deposit failed. Please check if your code matches the value.';
      }
    );
  }


}
