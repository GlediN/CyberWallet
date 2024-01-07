import {Component, NgZone, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
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
  searchDate: string = '';

  constructor(private zone: NgZone,private router:Router,private modalService: NgbModal, private http: HttpClient, private transactionService: TransactionService) {
  }

  retrieveDate() {
    console.log(this.searchDate);
  }

  ngOnInit() {
    const userEmail = sessionStorage.getItem('email');
    this.zone.run(() => {
    // @ts-ignore
    this.transactionService.getAllRecentTransactions(userEmail).subscribe(
      (response) => {
        // Handle the response
        console.log('Recent Transactions:', response);
        this.recentTransactions = response;

      },
      (error) => {
        console.error('Error fetching recent transactions:', error);
      }
    )


  })}
}
