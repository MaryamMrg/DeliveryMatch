import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: "USER";
}

export interface LoginResponse {
  token: string;
  role: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  role: string;
  email?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }


  login(credentials:{email:string, password:string }):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/v1/authenticate`,credentials)
  }

  register(userdata : RegisterRequest):Observable<any>{
 return this.http.post(`${this.apiUrl}/api/v1/register`,userdata);
  }
}
