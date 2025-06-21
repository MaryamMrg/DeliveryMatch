import { Component, OnInit } from '@angular/core';
import { Request, RequestService } from '../request-service';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-request-component',
  imports: [CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTooltipModule,MatDividerModule],
  templateUrl: './request-component.html',
  styleUrl: './request-component.css'
})
export class RequestComponent implements OnInit{

   errorMessage='';
   loading=true;
   requests:Request[]=[]

   

   constructor(private requestService:RequestService){}
   ngOnInit(): void {
     this.loadRequests();
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
}
