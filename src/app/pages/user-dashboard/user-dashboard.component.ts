import { Component } from '@angular/core';
import {LoginPageComponent} from "../login-page/login-page.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionPageComponent} from "../transaction-page/transaction-page.component";

interface TransactionData {
  transactionId: string;
  transactionAmount: string;
  transactionStatus: boolean;
  time: string;
}

interface UserData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  transaction: TransactionData;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  userArray: UserData[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contactNumber: '1234567890',
      address: '123 Main St',
      transaction: {
        transactionId: '1',
        transactionAmount: '200',
        transactionStatus: true,
        time: '2023-11-28T12:00:00Z'
      }
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      contactNumber: '9876543210',
      address: '456 Oak St',
      transaction: {
        transactionId: '2',
        transactionAmount: '500',
        transactionStatus: false,
        time: '2023-11-29T14:30:00Z'
      }
    },
    // Add more dummy data as needed
  ];
  constructor(private modalService: NgbModal) {}


  // Custom condition to check if a transaction is successful
  isTransactionSuccessful(transactionStatus: boolean): boolean {
    return transactionStatus === true;
  }

  // Method to get the CSS class based on transaction status
  getBadgeClass(transactionStatus: boolean): string {
    return this.isTransactionSuccessful(transactionStatus) ? 'badge bg-success rounded-3 fw-semibold' : 'badge bg-danger rounded-3 fw-semibold';
  }
  openLoginForm() {
    const modalRef = this.modalService.open(TransactionPageComponent,{size:"lg"});
  }


}
