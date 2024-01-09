import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/User Pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/User Pages/about-page/about-page.component";
import {ContactPageComponent} from "./pages/User Pages/contact-page/contact-page.component";
import {UserDashboardComponent} from "./pages/User Pages/user-dashboard/user-dashboard.component";
import {LoginPageComponent} from "./pages/User Pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/User Pages/signup-page/signup-page.component";
import {TransactionPageComponent} from "./pages/User Pages/transaction-page/transaction-page.component";
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";
import {DashboardComponent} from "./pages/admin-dashboard/dashboard/dashboard.component";
import {UserDetailsComponent} from "./pages/admin-dashboard/user-details/user-details.component";
import {DepositPageComponent} from "./pages/User Pages/deposit-page/deposit-page.component";
import {GifcardGeneratorComponent} from "./pages/admin-dashboard/gifcard-generator/gifcard-generator.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {
    path: 'dashboard', component: UserDashboardComponent,
  },
  {path: 'login',component:LoginPageComponent},
  {path: 'signup',component:SignupPageComponent},
  {path: 'transaction',component:TransactionPageComponent},
  {
    path: "admin", component: AdminDashboardComponent,
    children: [{
      path: '', redirectTo: 'admin', pathMatch: 'full'
    },
      {path: '', component: DashboardComponent}
    ,{path: 'user',component:UserDetailsComponent}
    ,{path: 'giftcard',component:GifcardGeneratorComponent}
    ]
  },
  {path:'deposit',component:DepositPageComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
