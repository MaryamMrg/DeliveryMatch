import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { SignupComponent } from './signup-component/signup-component';
import { AdComponent } from './ad-component/ad-component';
import { UpdateAdComponent } from './update-ad-component/update-ad-component';
import { CreateAdComponent } from './create-ad-component/create-ad-component';

export const routes: Routes = [

    {path : '', component :HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : 'signup' , component : SignupComponent},
    {path: 'ads',component : AdComponent},
    {path: 'ads/update/:id',component:UpdateAdComponent},
    {path: 'ads/create',component:CreateAdComponent
        
    }
];
