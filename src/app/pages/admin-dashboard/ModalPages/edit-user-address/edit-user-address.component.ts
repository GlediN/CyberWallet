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
  selector: 'app-edit-user-address',
  templateUrl: './edit-user-address.component.html',
  styleUrl: './edit-user-address.component.scss'
})
export class EditUserAddressComponent {
  constructor(private adminService:AdminService,private modalService: NgbModal, private transactionService: TransactionService, private router: Router,private depositService:DepositService) {
  }
  newAddress='';
  email='';

  transaction(){
    const data={
      email: this.email,
      address:this.newAddress,
    }
    this.adminService.updateAddress(data).subscribe(
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
