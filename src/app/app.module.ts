import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import {FormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';


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
  ], imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
