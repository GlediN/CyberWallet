import { Component } from '@angular/core';
import {AdminService} from "../../../../admin.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../../transaction.service";
import {Router} from "@angular/router";
import {DepositService} from "../../../../deposit.service";
import {
  UserEditedSuccesfullyPageComponent
} from "../user-edited-succesfully-page/user-edited-succesfully-page.component";
import {UserEditingFailedComponent} from "../user-editing-failed/user-editing-failed.component";

@Component({
  selector: 'app-edit-user-role',
  templateUrl: './edit-user-role.component.html',
  styleUrl: './edit-user-role.component.scss'
})
export class EditUserRoleComponent {
  constructor(private adminService:AdminService,private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  newRole='';
  email='';

  transaction(){
    const data={
      email: this.email,
      role:this.newRole,
    }
    this.adminService.updateRole(data).subscribe(
      (error) => {
        console.log(data);
        this.modalService.dismissAll();
        this.modalService.open(UserEditedSuccesfullyPageComponent)
      },
      (error) => {
        console.error(error);
        this.modalService.dismissAll();
        this.modalService.open(UserEditingFailedComponent);
      }
    );

  }
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }
}
