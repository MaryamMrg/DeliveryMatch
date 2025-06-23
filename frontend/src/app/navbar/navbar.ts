import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, User } from '../auth-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdComponent } from '../ad-component/ad-component';
@Component({
  selector: 'app-navbar',
  imports: [ CommonModule,
    RouterLink,RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  isMenuOpen = false;
  isMobile = false;
  isMenuCollapsed = true;
  currentUser:User|null=null;
constructor(private router :Router,
  private authservice:AuthService,
  private snackBar:MatSnackBar){
  this.authservice.currentUser$.subscribe(user=>{
    this.currentUser=user;
  });
}
ngOnInit(): void {
  this.isMobile = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) this.isMenuOpen = false;
  });
}
goToLogin(){
this.router.navigate(['/login']);
}



goToRegister(){
  this.router.navigate(['/signup'])
}


  logout() {
    this.authservice.logout();
    this.snackBar.open('Logged out successfully', 'Close', {duration: 3000});
    this.router.navigate(['/login']);
  }
    get isLoggedIn(): boolean {
    return this.authservice.isLoggedIn();
  }

  get userRole(): string | null {
    return this.authservice.getRole();
  }

  toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

 
}
