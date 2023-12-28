import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../../../transaction.service";
import {Router} from "@angular/router";
import {DepositService} from "../../../deposit.service";
import {UserNameEditorComponent} from "../ModalPages/user-name-editor/user-name-editor.component";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent {
  constructor(private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  editValue:string='';

  transaction(){
    if (this.editValue=="Name"){
      this.modalService.dismissAll();
      this.modalService.open(UserNameEditorComponent)
    }
  }
  closeForm() {
    this.modalService.dismissAll();
    document.body.classList.remove('modal-open');
  }

}
