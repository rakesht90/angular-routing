import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ServicesComponent } from './components/services/services.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent, 
    ContactComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
      ],
  imports: [
    CommonModule, AdminRoutingModule
  ]
})
export class AdminModule { }
