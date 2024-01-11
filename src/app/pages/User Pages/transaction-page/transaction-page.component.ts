import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import {TransactionSuccesPageComponent} from "../../Response  Pages/transaction-succes-page/transaction-succes-page.component";
import {TransactionFailedPageComponent} from "../../Response  Pages/transaction-failed-page/transaction-failed-page.component";

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  constructor(private modalService: NgbModal, private transactionService: TransactionService, private router: Router) {
  }

  recipient: string = '';
  description: string = '';
  amount:number=0;

  transactionFailed = false;
  errorMessage: string = '';

  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }

  transaction() {
    let email = sessionStorage.getItem("email");
    if(!email) {
      this.modalService.dismissAll()
      this.modalService.open(TransactionFailedPageComponent,{size:'lg'})
      console.error("Email not found in session storage.");
      return;
    }

    const transactionDetails = {
      recipient: this.recipient,
      description: this.description,
      amount: this.amount,
      email: email,
    };

    this.transactionService.transaction(transactionDetails).subscribe(
      (error) => {
        this.modalService.dismissAll()

      },
      (error) => {
        this.transactionFailed=true;
        this.errorMessage = 'Transaction failed. Please check your balance.';
        // this.modalService.open(TransactionFailedPageComponent)
        console.error('Transaction failed:', error);
      }
    );

    // this.modalService.dismissAll();
  }

}
