import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
