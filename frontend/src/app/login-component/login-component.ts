import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-login-component',
  imports: [ CommonModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent implements OnInit{
 
 loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  ngOnInit(): void {
    this.errorMessage='';
    this.successMessage='';
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

onSumbit():void{
  this.errorMessage='';
  this.successMessage='';
  this.loading=true;
 if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      const dataLogin = this.loginForm.value;
      this.authService.login(dataLogin).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
console.log('saved token : ', response.token);
console.log('user role is:', response.role);
          if(response.role === 'ADMIN'){
            alert("welcome admin")
            // this.router.navigate(['/admin-dashboard']);
          }if(response.role==="DRIVER"){
          }else {
            alert("welcome SENDER")
            //this.router.navigate(['user-dashboard']);
          }
          console.log('saved user is', response.user)
        },
        error: (err)=>{
          this.errorMessage = typeof err === 'string' ? err : 'Login failed';
        }
      })
    }
  


}
}
