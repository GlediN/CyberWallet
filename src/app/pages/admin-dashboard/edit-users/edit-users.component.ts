import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
import {DepositService} from "../../../deposit.service";
import {UserNameEditorComponent} from "../ModalPages/edit-user-name/user-name-editor.component";
import {EditUserEmailComponent} from "../ModalPages/edit-user-email/edit-user-email.component";
import {EditUserBalanceComponent} from "../ModalPages/edit-user-balance/edit-user-balance.component";
import {EditUserPasswordComponent} from "../ModalPages/edit-user-password/edit-user-password.component";
import {EditUserAddressComponent} from "../ModalPages/edit-user-address/edit-user-address.component";
import {EditUserRoleComponent} from "../ModalPages/edit-user-role/edit-user-role.component";
import {
  UserEditedSuccesfullyPageComponent
} from "../ModalPages/user-edited-succesfully-page/user-edited-succesfully-page.component";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent implements OnInit{
  constructor(private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  editValue:string='';

  transaction(){
    this.modalService.dismissAll();
    if (this.editValue=="Name"){
      this.modalService.open(UserNameEditorComponent)
    }else if (this.editValue=="Email"){
      this.modalService.open(EditUserEmailComponent)
    }else if (this.editValue=="Balance"){
      this.modalService.open(EditUserBalanceComponent)
    }else if (this.editValue=="Password"){
      this.modalService.open(EditUserPasswordComponent)
    }else if (this.editValue=="Address"){
      this.modalService.open(EditUserAddressComponent)
    }else if (this.editValue=="Role"){
      this.modalService.open(EditUserRoleComponent)
    }
  }
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }
  ngOnInit() {
    const showModal = sessionStorage.getItem('userEdit');
    if (showModal === 'true') {
      // Show the modal
      this.modalService.open(UserEditedSuccesfullyPageComponent);
      // Clear the stored information
      sessionStorage.removeItem('userEdit');
    }
  }

}
