import { Component, OnInit } from '@angular/core';
import { Ad, AdService } from '../ad-service';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-ad-component',
  imports: [CommonModule ,MatButtonModule,MatCardModule,MatIconModule,MatProgressSpinnerModule],
  templateUrl: './ad-component.html',
  styleUrl: './ad-component.css'
})
export class AdComponent implements OnInit{


  errorMessage='';
  loading=true;
  ads:Ad[]=[]
  ad! : Ad;
isDriver: boolean = false;
  constructor(private adservice:AdService,private router:Router,private authservice:AuthService){}

  ngOnInit(): void {
    this.loadAds();
  }


  loadAds():void{
    this.errorMessage='';
    this.loading=true;

    this.adservice.getAllAds().subscribe({
      next : (ads)=>{
        console.log('ads recieved : ',ads);
        
        this.ads=ads;
        this.loading=false;
      },
      error:(error)=>{
        console.log('error fetching ads:',error);
        this.loading=false;
      }
    })
  }

 navigateToUpdate(adId: number | undefined): void {
  if (adId !== undefined && adId !== null) {
    this.router.navigate(['/ads/update', adId]);
  } else {
    console.error('Ad ID is required for editing');
    this.errorMessage = 'Cannot edit ad: Invalid ID';
  }
}
deleteAd(adId: number | undefined): void {
  if (adId === undefined || adId === null) {
    console.error('Ad ID is required for deletion');
    this.errorMessage = 'Cannot delete ad: Invalid ID';
    return;
  }
  if (confirm('Are you sure you want to delete this ad? This action cannot be undone.')) {
    this.adservice.deleteAd(adId).subscribe({
      next: (response) => {
        console.log('Ad deleted successfully:', response);
       
        this.loadAds();
      },
      error: (err) => {
        console.error('Error deleting ad:', err);
        this.errorMessage = 'Failed to delete ad';
      }
    });
  }
}

goToCreate(){
  this.router.navigate(['/ads/create'])
}


 checkUserRole() {
    this.isDriver = this.authservice.getRole() === 'DRIVER';
  }


goToRequest(adId: number | undefined): void {
  console.log('goToRequest called with adId:', adId);
  console.log('Type of adId:', typeof adId);
  
  if (adId !== undefined && adId !== null) {
    this.router.navigate(['/ads/request', adId]);
  } else {
    console.error('Ad ID is required for a request');
    this.errorMessage = 'Cannot request ad: Invalid ID';
  }
}
}
