import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  formReg: FormGroup;

  constructor(
    private userService: AuthService,
    private router: Router
  ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    this.userService.register(this.formReg.value)
    .then(response =>{
      console.log('respuesta', response);
      this.router.navigate(['/login'])
    })
    .catch(error =>console.log(error))
  }
  toMain(){
    this.router.navigate(['/main-page'])
  }
}
