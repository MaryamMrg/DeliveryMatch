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
  }
private getAdId(): void {
    this.route.params.subscribe(params => {
      this.adId = params['id'];
      if (this.adId) {
        this.loadAd();
      } else {
        this.errorMessage = 'Invalid ad ID';
      }
    });
  
}
 private loadAd(): void {
    this.loadingAd = true;
    this.errorMessage = '';

    this.adService.getAdById(this.adId).subscribe({
      next: (ad: Ad) => {
        this.currentAd = ad;
        this.populateForm(ad);
        this.loadingAd = false;
      }
    });
  }
 private populateForm(ad: Ad): void {
    const formattedDate = ad.date instanceof Date 
      ? ad.date.toISOString().split('T')[0] 
      : new Date(ad.date).toISOString().split('T')[0];

    this.adForm.patchValue({
      destination: ad.destination,
      date: formattedDate,
      m_type: ad.m_type,
      capacity: ad.capacity
    });
  }

  get destination() { return this.adForm.get('destination'); }
  get date() { return this.adForm.get('date'); }
  get m_type() { return this.adForm.get('m_type'); }
  get capacity() { return this.adForm.get('capacity'); }

  onSubmit(): void {
    if (this.adForm.valid && this.adId) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const updatedAdData: Ad = {
        ...this.currentAd,
        destination: this.adForm.value.destination,
        date: new Date(this.adForm.value.date),
        m_type: this.adForm.value.m_type,
        capacity: this.adForm.value.capacity
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

  onReset(): void {
    if (this.currentAd) {
      this.populateForm(this.currentAd);
    }
  }
}