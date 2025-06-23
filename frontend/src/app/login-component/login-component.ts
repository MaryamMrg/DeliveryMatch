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
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router,private snackBar:MatSnackBar
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
          this.authService.saveUserData(response);
          this.snackBar.open('login successful','close',{duration:4000});
          // this.router.navigate(['/ads']);

          this.authService.saveToken(response.token);
          this.authService.saveRole(response.user.role);
         console.log('FULL LOGIN RESPONSE:', response.user);
          
          console.log('saved token : ', response.token);
          console.log('user role is:', response.user);
          
           switch(response.user.role) {
          case 'ADMIN':
            this.router.navigate(['/admin-dashboard']);
            break;
          case 'DRIVER':
            this.router.navigate(['/ads']);
            break;
          case 'SENDER':
            this.router.navigate(['/ads']);
            break;
          default:
            this.router.navigate(['/']);
        }
      },
        error: (err)=>{
          this.errorMessage = typeof err === 'string' ? err : 'Login failed';
        }
      })
    }
  


}
}
