import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-sender-dashboard',
  imports: [MatCardModule,MatIconModule],
  templateUrl: './sender-dashboard.html',
  styleUrl: './sender-dashboard.css'
})
export class SenderDashboard implements OnInit{
senderName:string='';

ngOnInit(): void {
  this.loadSenderInfo();
}
constructor(private authservice:AuthService){}
loadSenderInfo(): void {
    const user = this.authservice.getCurrentUser();
    this.senderName = user?.name || 'Sender';
  }
}
