import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../../transaction.service";
import {Router} from "@angular/router";
import {DepositService} from "../../../../deposit.service";
import {AdminService} from "../../../../admin.service";
import {
  TransactionFailedPageComponent
} from "../../../Response  Pages/transaction-failed-page/transaction-failed-page.component";
import {
  UserEditedSuccesfullyPageComponent
} from "../user-edited-succesfully-page/user-edited-succesfully-page.component";
import {UserEditingFailedComponent} from "../user-editing-failed/user-editing-failed.component";

@Component({
  selector: 'app-user-name-editor',
  templateUrl: './user-name-editor.component.html',
  styleUrl: './user-name-editor.component.scss'
})
export class UserNameEditorComponent {
  constructor(private adminService:AdminService,private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  newUsername='';
  email='';

  transaction(){
    const data={
      email: this.email,
      name:this.newUsername,
    }
    this.adminService.updateName(data).subscribe(
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
      this.modalService.open(UserNameEditorComponent)

  }
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }

}
