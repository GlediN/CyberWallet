import {Component, Input} from '@angular/core';
import {UserService} from "../../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  constructor( private userService: UserService,private router:Router) {
  }
  // ngOnInit() {
  //   const userEmail = sessionStorage.getItem('email');
  //   this.userService.isAdmin(userEmail).subscribe(
  //     (response) => {
  //       // Handle the response
  //       console.log('Is user an admin:', response);
  //       if (response==true){
  //         this.router.navigate(['/admin'])
  //       }else if (response==false){
  //         this.router.navigate([''])
  //       }
  //     },
  //     (error) => {
  //       this.router.navigate([''])
  //       console.error('Error:', error);
  //     }
  //   )
  // }
}
