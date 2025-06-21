import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Request{
  id?:number,
  senderId:number,
  packId:number,
  status:string
}
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl ="http://localhost:8080/request";


  constructor(private http : HttpClient) { }

 private getAuthHeader():HttpHeaders{
  const token= localStorage.getItem('token');
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  });
 }

 getAllrequests():Observable<any>{
  return this.http.get<any>(this.apiUrl,{headers:this.getAuthHeader()});
 }

 creatrequest(request:Request):Observable<Request>{
  return this.http.post<Request>(this.apiUrl,request,{headers:this.getAuthHeader()});
 }

 updateRequest(id:number,request:Request):Observable<Request>{
  return this.http.put<Request>(`${this.apiUrl}/${id}`,request,{headers:this.getAuthHeader()});
 }

 deleteRequest(id :number):Observable<any>{
  return this.http.delete(`${this.apiUrl}/${id}`,{headers:this.getAuthHeader()});
 }
}
