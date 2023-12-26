import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {LoginPageComponent} from "../../pages/User Pages/login-page/login-page.component";
import {HomePageComponent} from "../../pages/User Pages/home-page/home-page.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  userLogged=false;
  sessionToken=sessionStorage.getItem('token')
  isLoginFormOpen = false;

  constructor(private modalService: NgbModal) {}

  openLoginForm() {
     this.modalService.open(LoginPageComponent);

  }

  isLoggedIn(){
    if (this.sessionToken!=null){
      return true;
    }else {
      return false;
    }
  }

    protected readonly HomePageComponent = HomePageComponent;
    protected readonly sessionStorage = sessionStorage;

  ngOnInit(): void {
    this.isLoggedIn()
  }
}
