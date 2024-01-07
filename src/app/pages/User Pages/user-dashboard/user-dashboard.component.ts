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
interface UserBalanceResponse {
  balance:number;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']  // Fix the typo here, it should be 'styleUrls' instead of 'styleUrl'
})
export class UserDashboardComponent implements OnInit {

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
    const withdrawModal = sessionStorage.getItem('showWithdrawTransactionSuccessModal');
    const depositModal = sessionStorage.getItem('showDepositTransactionSuccessModal');
    const transferModal = sessionStorage.getItem('showTransactionSuccessModal');
    if (withdrawModal === 'true') {
      // Show the modal
      this.modalService.open(TransactionSuccesPageComponent);
      // Clear the stored information
      sessionStorage.removeItem('showTransactionSuccessModal');
    }
    if (depositModal === 'true') {
      // Show the modal
      this.modalService.open(TransactionSuccesPageComponent);
      // Clear the stored information
      sessionStorage.removeItem('showDepositTransactionSuccessModal');
    }
    if (transferModal === 'true'){
      this.modalService.open(TransactionSuccesPageComponent);
      sessionStorage.removeItem('showTransactionSuccessModal');
    }

    this.zone.run(() => {
    const userEmail = sessionStorage.getItem('email');
    // @ts-ignore
    this.transactionService.getRecentTransactions(userEmail).subscribe(
      (response) => {
        // Handle the response
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
      // @ts-ignore
      this.userService.getBalance(userEmail).subscribe(
        (response) => {
          // Handle the response
          this.userBalance=response.balance;
        },
        (error) => {
          console.error('Error:', error);
        }
      )
  })}

}
