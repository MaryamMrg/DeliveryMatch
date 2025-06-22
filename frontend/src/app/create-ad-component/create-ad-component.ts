import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-ad-component',
  imports: [],
  templateUrl: './create-ad-component.html',
  styleUrl: './create-ad-component.css'
})
export class CreateAdComponent {

constructor(private http: HttpClient){

}


}
