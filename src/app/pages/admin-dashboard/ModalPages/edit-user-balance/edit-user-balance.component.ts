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
import {UserNameEditorComponent} from "../edit-user-name/user-name-editor.component";

@Component({
  selector: 'app-edit-user-balance',
  templateUrl: './edit-user-balance.component.html',
  styleUrl: './edit-user-balance.component.scss'
})
export class EditUserBalanceComponent {
  constructor(private adminService:AdminService,private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  newBalance=0;
  email='';

  transaction(){
    const data={
      email: this.email,
      balance:this.newBalance,
    }
    this.adminService.updateBalance(data).subscribe(
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
