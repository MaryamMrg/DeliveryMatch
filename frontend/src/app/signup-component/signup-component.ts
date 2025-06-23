import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService ,RegisterRequest} from '../auth-service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-signup-component',
  imports: [CommonModule,ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.css'
})
export class SignupComponent implements OnInit{

   registerForm :FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){
      this.registerForm= this.formBuilder.group({
        name:['',[Validators.required]],
        email:['',[Validators.required]],
        password:['',[Validators.required]],
        role:['',[Validators.required]]
      });


  }


  ngOnInit(): void {
    this.errorMessage='';
    this.successMessage=''
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const data :  RegisterRequest= this.registerForm.value;
      this.authService.register(data).subscribe({
        next : (response) =>{
          this.successMessage = 'Registration successful';

          console.log('user:',response)
          this.errorMessage = '';
          this.registerForm.reset();
         
          setTimeout(()=> this.router.navigate(['/login']),1500);
        },
        error: err=>{
          this.errorMessage = err || 'Registration failed';
          this.successMessage='';
        }
      });

    }
  }

}
