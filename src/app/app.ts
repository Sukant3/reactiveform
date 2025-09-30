import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveform');
//  Username=new FormControl('')
//  Email=new FormControl('')
//  Phone=new FormControl('')
  
//  users=new FormGroup({
// Username:new FormControl(''),
//  Email:new FormControl(''),
//  Phone:new FormControl('')
  
//  })
}
