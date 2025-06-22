import { Component, Input, OnInit } from '@angular/core';
import { Request, RequestService } from '../request-service';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOption } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-request-component',
  imports: [CommonModule,
    MatCardModule,
    MatOption,ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './request-component.html',
  styleUrl: './request-component.css'
})
export class RequestComponent implements OnInit{

 adId!: number;  
 senderId!:number;
  packId!:number;

  requestForm!: FormGroup;
  errorMessage='';
  successMessage = '';
  loading=true;
   
 adRequests: Request[] = [];
  loadingAdRequests = false;
  adRequestsError = '';
   

   constructor(private fb: FormBuilder,private requestService:RequestService,private route: ActivatedRoute){}


   ngOnInit(): void {
  
    
    
    this.route.params.subscribe(params => {
      
      
      const adIdParam = params['adId'];
      if (adIdParam) {
        this.adId = parseInt(adIdParam, 10); 
        console.log(' adId:', this.adId);
        
       
      }
      
      
      if (!adIdParam || isNaN(this.adId) || this.adId <= 0) {
      
        console.error('adIdParam:', adIdParam);
        console.error('parsed adId:', this.adId);
        this.errorMessage = 'Invalid AdId. Cannot send request.';
        this.loading = false;
        return;
      }
      
      
      
     
      this.requestForm = this.fb.group({
        status: ['PENDING', Validators.required]
      });
      
     
      this.getRequestByAd();
    });
}

 getRequestByAd() {
    if (!this.adId || isNaN(this.adId)) {
      this.adRequestsError = 'No valid ad ID provided';
      this.loadingAdRequests = false;
      return;
    }

    this.loadingAdRequests = true;
    this.adRequestsError = '';

    console.log('Fetching requests for ad ID:', this.adId);

    this.requestService.getRequestByAd(this.adId).subscribe({
      next: (requests: Request[]) => {
        console.log('Requests received for ad:', requests);
        this.adRequests = requests;
        this.loadingAdRequests = false;
        
        if (requests.length === 0) {
          console.log('No requests found for this ad');
        }
      },
      error: (error) => {
        console.error('Error fetching requests for ad:', error);
        this.adRequestsError = 'Failed to load requests for this ad';
        this.loadingAdRequests = false;
        this.adRequests = [];
      }
    });
}
   loadRequests():void{
    this.errorMessage='';
    this.loading = true;

    this.requestService.getAllrequests().subscribe({

      next : (requests)=>{

        console.log('requests recieved : ', requests);
        this.loading=false;

      },error:(error)=>{

        console.error('error fetching requests:',error);
        this.loading=false;

      }
    })
   }

onSumbit() {
    if (!this.requestForm.valid) {
      console.error('Form is invalid');
      return;
    }

    if (!this.adId || isNaN(this.adId)) {
      console.error('Cannot submit: invalid adId');
      this.errorMessage = 'Invalid Ad ID';
      return;
    }

    const requestData: Request = {
      ad_id: this.adId,
      packId: this.packId,
      status: this.requestForm.value.status
    };

    
    console.log('adId :', this.adId);
    console.log('requestData being sent:', requestData);
    

    this.requestService.creatrequest(requestData).subscribe({
      next: (response) => {
        this.successMessage = 'Request submitted!';
        this.errorMessage = '';
        this.requestForm.reset({ status: 'PENDING' });
        console.log('request details', response);
      },
      error: (error) => {
        console.error('Error submitting :', error);
        this.errorMessage = 'Failed to send request';
        this.successMessage = '';
      }
    });
  }
}
