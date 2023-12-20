import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionPageComponent} from "../transaction-page/transaction-page.component";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../transaction.service";

export interface Transaction {
  id: string;
  recipient: string;
  amount: string;
  dateOfTransaction: string;
  description: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']  // Fix the typo here, it should be 'styleUrls' instead of 'styleUrl'
})
export class UserDashboardComponent implements OnInit {
  id: string = '';
  recipient: string = '';
  amount: string = '';
  dateOfTransaction: string = '';
  description: string = '';

  recentTransactions: Transaction[] = [];

  constructor(private modalService: NgbModal, private http: HttpClient, private transactionService: TransactionService) {
  }

  // Custom condition to check if a transaction is successful
  isTransactionSuccessful(transactionStatus: boolean): boolean {
    return transactionStatus;
  }

  // Method to get the CSS class based on transaction status
  getBadgeClass(transactionStatus: boolean): string {
    return this.isTransactionSuccessful(transactionStatus) ? 'badge bg-success rounded-3 fw-semibold' : 'badge bg-danger rounded-3 fw-semibold';
  }

  openTransactionForm() {
    const modalRef = this.modalService.open(TransactionPageComponent, {size: "lg"});
  }

  ngOnInit() {
    const userEmail = sessionStorage.getItem('email'); // Replace with the actual user email
    // @ts-ignore
    this.transactionService.getRecentTransactions(userEmail).subscribe(
      (response) => {
        // Handle the response
        console.log('Recent Transactions:', response);
        this.recentTransactions = response;
      },
      (error) => {
        console.error('Error fetching recent transactions:', error);
      }
    );
  }

}
