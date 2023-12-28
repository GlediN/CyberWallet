import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/User Pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/User Pages/about-page/about-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactPageComponent } from './pages/User Pages/contact-page/contact-page.component';
import { UserDashboardComponent } from './pages/User Pages/user-dashboard/user-dashboard.component';
import {FormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/User Pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/User Pages/signup-page/signup-page.component';
import { TransactionPageComponent } from './pages/User Pages/transaction-page/transaction-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionSuccesPageComponent } from './pages/Response  Pages/transaction-succes-page/transaction-succes-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BodyComponent } from './pages/admin-dashboard/body/body.component';
import { DashboardComponent } from './pages/admin-dashboard/dashboard/dashboard.component';
import { UserDetailsComponent } from './pages/admin-dashboard/user-details/user-details.component';
import { SidenavComponent } from './pages/admin-dashboard/sidenav/sidenav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DepositPageComponent } from './pages/User Pages/deposit-page/deposit-page.component';
import { TransactionFailedPageComponent } from './pages/Response  Pages/transaction-failed-page/transaction-failed-page.component';
import { WithdrawPageComponent } from './pages/User Pages/withdraw-page/withdraw-page.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { LoginFailedPageComponent } from './pages/Response  Pages/login-failed-page/login-failed-page.component';
import {NgOptimizedImage} from "@angular/common";
import { EditUsersComponent } from './pages/admin-dashboard/edit-users/edit-users.component';
import { UserNameEditorComponent } from './pages/admin-dashboard/ModalPages/user-name-editor/user-name-editor.component';
import { UserEditedSuccesfullyPageComponent } from './pages/admin-dashboard/ModalPages/user-edited-succesfully-page/user-edited-succesfully-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    ContactPageComponent,
    UserDashboardComponent,
    LoginPageComponent,
    SignupPageComponent,
    TransactionPageComponent,
    TransactionSuccesPageComponent,
    AdminDashboardComponent,
    BodyComponent,
    DashboardComponent,
    UserDetailsComponent,
    SidenavComponent,
    DepositPageComponent,
    TransactionFailedPageComponent,
    WithdrawPageComponent,
    LoginFailedPageComponent,
    EditUsersComponent,
    UserNameEditorComponent,
    UserEditedSuccesfullyPageComponent,
  ], imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgOptimizedImage
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
