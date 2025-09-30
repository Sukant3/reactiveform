import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  //  Username=new FormControl('')
//  Email=new FormControl('')
//  Phone=new FormControl('')
  
userdata:any 
 user=new FormGroup({
 Username:new FormControl(''),
 Email:new FormControl(''),
 Phone:new FormControl('')
  
 })

 onsubmit(){
  
  alert("Working")
 }
}
