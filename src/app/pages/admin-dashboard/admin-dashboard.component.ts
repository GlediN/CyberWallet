import {Component, NgZone, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TransactionService} from "../../transaction.service";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit{
  constructor(private modalService: NgbModal, private http: HttpClient, private userService: UserService,private zone: NgZone,private router:Router) {
  }
  title = 'sidenav';
  isAdmin=false;
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  ngOnInit() {
    const userEmail = sessionStorage.getItem('email');
    const userModal=sessionStorage.getItem("showUserEditedSuccess")
    // @ts-ignore
    if (userModal===true){
      this.router.navigate(["/admin/user"])
    }
    // @ts-ignore
    this.userService.isAdmin(userEmail).subscribe(
      (response) => {
        // Handle the response
        console.log('Is user an admin:', response);
        if (response==true){
          this.router.navigate(['/admin'])
        }else if (response==false){
          this.router.navigate([''])
        }
      },
      (error) => {
        console.error('Error:', error);
        this.router.navigate([''])
      }
    )

  }
}
