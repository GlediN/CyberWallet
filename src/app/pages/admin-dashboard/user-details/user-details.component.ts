import {Component, NgZone, OnInit} from '@angular/core';
import {UserService} from "../../../user.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../../transaction.service";
import {EditUsersComponent} from "../edit-users/edit-users.component";
export interface UserDetails{
  id:string;
  name:string;
  address:string;
  balance:number;
  email:string;
  role:string
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{

  users1:UserDetails[]=[];
    users: UserDetails[] = [
    {
      id: '1',
      name: 'John Doe',
      address: '123 Main Street, Cityville, USA',
      balance: 1000,
      email: 'john.doe@example.com',
      role: 'User'
    }]
  constructor(private userService:UserService,private router:Router,private modalService: NgbModal, private http: HttpClient, private transactionService: TransactionService,private zone: NgZone) {
  }

  getUsers(){
    this.modalService.open(EditUsersComponent)

  }
  ngOnInit() {

  }

}
