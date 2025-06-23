import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-driver-dashboard',
  imports: [MatCardModule,MatIconModule],
  templateUrl: './driver-dashboard.html',
  styleUrl: './driver-dashboard.css'
})
export class DriverDashboard implements OnInit {
driverName:string='';



constructor(private authservice : AuthService ,private router:Router){}
  ngOnInit(): void {
    this.loadDriverInfo();
    
  }
  loadDriverInfo(): void {
    const user = this.authservice.getCurrentUser();
    this.driverName = user?.name || 'Driver';
  }

}
