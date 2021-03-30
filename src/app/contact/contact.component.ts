import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  DetailsSubmitted=false;

  loginForm=new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  })

  collectData() {
    console.log(this.loginForm.value)
    this.DetailsSubmitted=true;
  }

  get name(){return this.loginForm.get('name')}
  get email(){return this.loginForm.get('email')}

  constructor() { }

  ngOnInit(): void {
  }

}
