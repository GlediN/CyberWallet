import {Component, NgZone, OnInit} from '@angular/core';
import {UserService} from "../../../user.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../../transaction.service";
import {EditUsersComponent} from "../edit-users/edit-users.component";
import {AdminService} from "../../../admin.service";
import {
  UserEditedSuccesfullyPageComponent
} from "../ModalPages/user-edited-succesfully-page/user-edited-succesfully-page.component";
export interface UserDetails{
  id:string;
  name:string;
  address:string;
  balance:number;
  email:string;
  role:string
  dateOfRegister:string
  error:any
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{

    users: UserDetails[] = []
  constructor(private adminService:AdminService,private router:Router,private modalService: NgbModal, private http: HttpClient, private transactionService: TransactionService,private zone: NgZone) {
  }

  getUsers(){
    this.modalService.open(EditUsersComponent)

  }
  ngOnInit() {

    this.zone.run(() => {
      this.adminService.getAllUsers().subscribe(
        (response) => {
          // Handle the response
          this.users = response.data;
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      )
    })
  }

}
