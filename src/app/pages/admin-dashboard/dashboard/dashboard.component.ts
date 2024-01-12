import {Component, NgZone, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../admin.service";
import {interval, Subscription} from "rxjs";
export interface Transaction {
  id: string;
  recipient: string;
  amount: string;
  dateOfTransaction: string;
  description: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  recentTransactions: Transaction[] = [];
  date: string = '';

  constructor(private zone: NgZone,private adminService:AdminService,private transactionService: TransactionService,) {
  }
  private intervalSubscription: Subscription | undefined;

  retrieveDate() {
    const date = this.date;
    // Assuming this.date is a string in the format "YYYY-MM-DD"
    const requestData = {
      date: date
    };

    this.adminService.getTransactionsByDate(requestData).subscribe(
      (response: Transaction[]) => {
        // Handle the response
        console.log('Recent Transactions:', response);
        this.recentTransactions = response;
      },
      (error) => {
        this.recentTransactions=[];
        console.error('Error fetching recent transactions by date:', error);
      }
    );
  }

  ngOnInit() {
    this.zone.run(() => {
      this.dataFetch();//Call first time when the user logs in
      this.intervalSubscription = interval(5000).subscribe(() => {
        this.dataFetch(); // Call the method you want to execute every 5 seconds
      });
    })
    }

  dataFetch(){
    const userEmail = sessionStorage.getItem('email');
      // @ts-ignore
      this.transactionService.getAllRecentTransactions(userEmail).subscribe(
        (response) => {
          // Handle the response
          this.recentTransactions = response;
        },
        (error) => {

        }
      )
  }
}
