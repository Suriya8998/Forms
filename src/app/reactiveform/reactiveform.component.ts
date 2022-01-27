import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.minLength(6)]),
    pswd:new FormControl('',[Validators.required,Validators.minLength(6)])
  })


  get email(){
    return this.loginForm.controls;
  }
  get pswd(){
    return this.loginForm.controls;
  }

}