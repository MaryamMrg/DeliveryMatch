import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from "./login-component/login-component";
import { SignupComponent } from "./signup-component/signup-component";
import { Navbar } from "./navbar/navbar";
import { HomeComponent } from "./home-component/home-component";
import { AdminDash } from "./admin-dash/admin-dash";
import { RequestComponent } from "./request-component/request-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent, Navbar, HomeComponent, AdminDash, RequestComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Frontend';
}
