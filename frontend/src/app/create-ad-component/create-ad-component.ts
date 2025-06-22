import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Ad, AdService } from '../ad-service';
import { Router } from '@angular/router';
import { F } from '@angular/cdk/keycodes';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-create-ad-component',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './create-ad-component.html',
  styleUrl: './create-ad-component.css'
})
export class CreateAdComponent implements OnInit{

   adForm !:FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';
constructor(private fb:FormBuilder,private adService:AdService,private router:Router){
  

}
ngOnInit(): void {
   this.adForm = this.fb.group({
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    m_type: ['', [Validators.required]],
    capacity: ['', [Validators.required, Validators.min(1)]]
  });
}

  get destination() { return this.adForm.get('destination'); }
  get date() { return this.adForm.get('date'); }
  get m_type() { return this.adForm.get('m_type'); }
  get capacity() { return this.adForm.get('capacity'); }


  onSumbit():void{
    if(this.adForm.valid){
      this.loading=true;
      this.errorMessage='';
      this.successMessage='';

         const adData: Ad= {
        destination: this.adForm.value.destination,
        date: new Date(this.adForm.value.date),
        m_type: this.adForm.value.m_type,
        capacity: this.adForm.value.capacity
      };

      this.adService.createAd(adData).subscribe({
        next : (response)=>{
          console.log('Ad created successfully:',response);
          this.successMessage='Ad created successfully!';
          this.loading=false;
        },error :(err)=> {
          console.error('error creating ad:',err);
          this.errorMessage='failed to create ad';
          this.loading=false;
        },
      })
    }
  }
}
