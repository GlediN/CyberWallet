import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoginFormOpen = false;

  constructor(private modalService: NgbModal) {}

  openLoginForm() {
    const modalRef = this.modalService.open(LoginPageComponent);

    modalRef.result
      .then(
        () => {
          this.isLoginFormOpen = false;
        },
        () => {
          this.isLoginFormOpen = false;
        }
      )
      .finally(() => {
        this.isLoginFormOpen = false;
      });
  }
}
