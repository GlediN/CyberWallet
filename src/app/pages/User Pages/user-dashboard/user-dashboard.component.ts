import {Component, NgZone, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionPageComponent} from "../transaction-page/transaction-page.component";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../../transaction.service";
import {DashboardComponent} from "../../admin-dashboard/dashboard/dashboard.component";
import {TransactionSuccesPageComponent} from "../../Response  Pages/transaction-succes-page/transaction-succes-page.component";
import {DepositPageComponent} from "../deposit-page/deposit-page.component";
import {WithdrawPageComponent} from "../withdraw-page/withdraw-page.component";
import {Router} from "@angular/router";
import {UserService} from "../../../user.service";

export interface Transaction {
  id: string;
  recipient: string;
  amount: string;
  dateOfTransaction: string;
  description: string;
}
interface UserNameResponse {
  name: string;
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
  userName:string='';
  userBalance:number=0;

  constructor(private userService:UserService,private router:Router,private modalService: NgbModal, private http: HttpClient, private transactionService: TransactionService,private zone: NgZone) {
  }
  // Custom condition to check if a transaction is successful
  isTransactionSuccessful(transactionStatus: boolean): boolean {
    return transactionStatus;
  }

  // Method to get the CSS class based on transaction status
  getBadgeClass(transactionStatus: boolean): string {
    return this.isTransactionSuccessful(transactionStatus) ? 'badge bg-success rounded-3 fw-semibold' : 'badge bg-danger rounded-3 fw-semibold';
  }
  transactionFormValue = ''; // Initialize with an empty object


  openTransactionForm(value: any) {
    if (this.transactionFormValue=='deposit') {
      const modalRef = this.modalService.open(DepositPageComponent,{size:'lg'});
    }else if (this.transactionFormValue=='transfer'){
      const modalRef = this.modalService.open(TransactionPageComponent, {size: "lg"});
    }else if (this.transactionFormValue=='withdraw'){
      const modalRef = this.modalService.open(WithdrawPageComponent, {size:'lg'});

    }
    console.log(this.transactionFormValue)
  }

  ngOnInit() {
    this.zone.run(() => {
    const userEmail = sessionStorage.getItem('email');
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
    )
    // @ts-ignore
    this.transactionService.getUserName(userEmail).subscribe(
      (response: UserNameResponse) => {
        // Handle the response
        console.log('Your username:', response.name);
        this.userName = response.name;
      },
      (error) => {
        console.error('Error fetching your username:', error);
      }
    )
      // @ts-ignore
       this.userService.isAdmin(userEmail).subscribe(
        (response) => {
          // Handle the response
          console.log('Is user an admin:', response);
          if (response==true){
            this.router.navigate(['/admin'])
          }else if (response==false){
            this.router.navigate(['dashboard'])
          }
        },
        (error) => {
          console.error('Error:', error);
          this.router.navigate([''])
        }
      )
  })}

}
