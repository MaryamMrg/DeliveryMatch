import { Component, OnInit } from '@angular/core';
import { Ad, AdService } from '../ad-service';
import { CommonModule } from '@angular/common';

// Add to your module imports:
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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

  constructor(private adservice:AdService){}

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
}
