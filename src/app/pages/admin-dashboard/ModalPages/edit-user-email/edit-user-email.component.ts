import { Component } from '@angular/core';
import {AdminService} from "../../../../admin.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../../transaction.service";
import {Router} from "@angular/router";
import {DepositService} from "../../../../deposit.service";
import {
  UserEditedSuccesfullyPageComponent
} from "../user-edited-succesfully-page/user-edited-succesfully-page.component";
import {
  TransactionFailedPageComponent
} from "../../../Response  Pages/transaction-failed-page/transaction-failed-page.component";
import {UserNameEditorComponent} from "../edit-user-name/user-name-editor.component";
import {UserEditingFailedComponent} from "../user-editing-failed/user-editing-failed.component";

@Component({
  selector: 'app-edit-user-email',
  templateUrl: './edit-user-email.component.html',
  styleUrl: './edit-user-email.component.scss'
})
export class EditUserEmailComponent {
  constructor(private adminService:AdminService,private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  newEmail='';
  email='';

  transaction(){
    const data={
      oldEmail: this.email,
      newEmail:this.newEmail,
    }
    this.adminService.updateEmail(data).subscribe(
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
