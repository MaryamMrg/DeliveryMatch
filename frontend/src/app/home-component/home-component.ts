import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-component',
  imports: [MatCardModule,
    MatButtonModule,
    MatIconModule,CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit{

  constructor(private authservice:AuthService,private router :Router){}

  ngOnInit(): void {
    
  }
onSendPack():void{
this.router.navigate(['/ads'])
}

onAddAnnounce():void{
  this.router.navigate(['/ads'])
}
}
