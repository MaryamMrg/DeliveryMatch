import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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

  getAuthHeader():HttpHeaders{
     const token= localStorage.getItem('token');
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  });
  }

  getAllAds():Observable<any>{
 return this.http.get<any>(this.apiUrl,{headers:this.getAuthHeader()});
  }

  createAd(ad:Ad){
return this.http.post<Ad>(this.apiUrl,ad,{headers:this.getAuthHeader()});
  }
  
  updateAd(id:number,ad:Ad){
 return this.http.put<Ad>(`${this.apiUrl}/update/${id}`,ad,{headers:this.getAuthHeader()})
  }

  deleteAd(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`,{headers:this.getAuthHeader()})

  }
  getAdById():Observable<any>{
return this.http.get<any>(`${this.apiUrl}/`)
  }
}
