import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Ad{
  id?:number;
  destination : string;
  date: Date;
  m_type:string;
  capacity: number
}


@Injectable({
  providedIn: 'root'
})
export class AdService {
 
  private apiUrl = "http://localhost:8080/Ad"
  constructor(private http : HttpClient) { }

  getAuthHeader(){}

  getAllAds(){

  }

  createAd(){

  }
  
  updateAd(){

  }

  deleteAd(){

  }
}
