import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ad, AdService } from '../ad-service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-update-ad-component',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './update-ad-component.html',
  styleUrl: './update-ad-component.css'
})
export class UpdateAdComponent implements OnInit{

  adForm !:FormGroup;
  loading = false;
  loadingAd=false;
  errorMessage = '';
  successMessage = '';
  adId !:number;
  currentAd:Ad|null=null;

  constructor(private fb:FormBuilder,private adService:AdService,private router:Router,private route:ActivatedRoute){
    
  }

 ngOnInit(): void {
  this.adForm = this.fb.group({
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    m_type: ['', [Validators.required]],
    capacity: ['', [Validators.required, Validators.min(1)]]
  });

  // ✅ Extract adId from URL route param
  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam) {
    this.adId = +idParam; // convert to number
    this.loadAd();        // now it's safe to call
  } else {
    this.errorMessage = 'Invalid ad ID';
  }
}


private loadAd(): void {
  this.loadingAd = true;
  this.errorMessage = '';

  this.adService.getAdById(this.adId).subscribe({
    next: (ad: Ad) => {
      this.currentAd = ad;
console.log('ad:',this.currentAd)
      // ✅ Pre-fill form fields
      this.adForm.patchValue({
        destination: ad.destination,
        date: new Date(ad.date).toISOString().substring(0, 10),
        m_type: ad.m_type,
        capacity: ad.capacity,
        start:ad.start
      });

      this.loadingAd = false;
    },
    error: (err) => {
      this.errorMessage = 'Failed to load ad details';
      this.loadingAd = false;
    }
  });
}


  get destination() { return this.adForm.get('destination'); }
  get date() { return this.adForm.get('date'); }
  get m_type() { return this.adForm.get('m_type'); }
  get capacity() { return this.adForm.get('capacity'); }
  get start(){return this.adForm.get('start')}
  onSubmit(): void {
    if (this.adForm.valid && this.adId) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const updatedAdData: Ad = {
        ...this.currentAd,  // This spreads existing properties including id
  destination: this.adForm.value.destination || '',
  date: new Date(this.adForm.value.date || new Date()),
  m_type: this.adForm.value.m_type || null,
  capacity: this.adForm.value.capacity || 0,
  start: this.adForm.value.start || null  // H
      };

      this.adService.updateAd(this.adId, updatedAdData).subscribe({
        next: (response) => {
          console.log('Ad updated successfully:', response);
          this.successMessage = 'Ad updated successfully!';
          this.loading = false;
          
          // Optional: Navigate back after successful update
          setTimeout(() => {
            this.router.navigate(['/ads']);
          }, 2000);
        },
        error: (err) => {
          console.error('Error updating ad:', err);
          this.errorMessage = 'Failed to update ad';
          this.loading = false;
        }
      });
    }
    
  }

  onCancel(): void {
    this.router.navigate(['/ads']);
  }

  
}