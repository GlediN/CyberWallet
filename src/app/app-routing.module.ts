import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {UserDashboardComponent} from "./pages/user-dashboard/user-dashboard.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {TransactionPageComponent} from "./pages/transaction-page/transaction-page.component";
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {
    path: 'dashboard', component: UserDashboardComponent,
  },
  {path: 'login',component:LoginPageComponent},
  {path: 'signup',component:SignupPageComponent},
  {path: 'transaction',component:TransactionPageComponent},
  {path: 'admin',component:AdminDashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
