import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { SignupComponent } from './signup-component/signup-component';
import { AdComponent } from './ad-component/ad-component';
import { UpdateAdComponent } from './update-ad-component/update-ad-component';
import { CreateAdComponent } from './create-ad-component/create-ad-component';
import { RequestComponent } from './request-component/request-component';
import { AdminDash } from './admin-dash/admin-dash';
import { AuthGuard } from './guards/auth-guard';
import { DriverDashboard } from './driver-dashboard/driver-dashboard';
import { SenderDashboard } from './sender-dashboard/sender-dashboard';

export const routes: Routes = [

    
    {path : '', component :HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : 'signup' , component : SignupComponent},
{ 
    path: 'admin-dashboard', 
    component: AdminDash,
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }
  },
  { 
    path: 'driver-dashboard', 
    component: DriverDashboard,
    canActivate: [AuthGuard],
    data: { expectedRole: 'DRIVER' }
  },
  { 
    path: 'sender-dashboard', 
    component: SenderDashboard,
    canActivate: [AuthGuard],
    data: { expectedRole: 'SENDER' }
  },
  {
    path: 'ads/update/:id',
    component: UpdateAdComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'DRIVER' }
  },
  
    {
    path: 'ads/create',
    component: CreateAdComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'DRIVER' }  
  },  {
    path: 'ads',
    component: AdComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: ['SENDER','DRIVER'] }  
  },{
    path: 'ads/request/:adId',
    component: RequestComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'SENDER' } 
  }
    
];
