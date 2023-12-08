import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  constructor(private modalService:NgbModal,private transactionService:TransactionService,private router:Router) {
  }
  recipient:string='';
  description:string='';
  amount:Number=0;
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }
  transaction(){
    const transactionDetails= {
      recipent:this.recipient,
      description:this.description,
      amount:this.amount,

    };
    this.transactionService.transaction(transactionDetails).subscribe(
    (response: any) => {

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Transaction failed:', error);
      }
    );
  }

}
