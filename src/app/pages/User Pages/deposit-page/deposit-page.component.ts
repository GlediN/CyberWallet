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

  transaction() {
   const transactionDetails = {
      code:this.code,
      amount: this.amount,
    }

    this.depositService.deposit(transactionDetails).subscribe(
      (error) => {
        console.log(transactionDetails);
        sessionStorage.setItem('showDepositTransactionSuccessModal', 'true');
        window.location.reload();
      },
      (error) => {
        this.modalService.open(TransactionFailedPageComponent);
        console.error('Transaction failed:', error);
        console.log(transactionDetails)
      }
    );
    this.modalService.dismissAll();
  }


}
