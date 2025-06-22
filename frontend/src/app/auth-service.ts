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
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/v1/auth/authenticate`,credentials)
  }

  register(userdata : {name:string,email:string,password:string,role:string}):Observable<any>{
 return this.http.post<RegisterRequest>(`${this.apiUrl}/api/v1/auth/register`,userdata);
  }

  getToken():string | null{
   return localStorage.getItem('token');

  }

  getRole() : string | null{
    return localStorage.getItem('role');
  }

 
    saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  saveRole(role: string): void {
    localStorage.setItem('role', role);
  }
}
