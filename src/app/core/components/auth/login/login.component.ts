import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  @ViewChild('.wrapper') wrapper!: any;

  isActive: boolean = true;
  fg: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {
    this.fg = fb.group({
      username: [ '', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
      password: [ '', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]]
    });
    this.startTimer();
  }
  startTimer(): void {
    setTimeout(() => {
      this.isActive = !this.isActive;
      console.log(9999999);
    }, 650); // Multiplicamos por 1000 para convertir el tiempo de segundos a milisegundos
  }
  // registerLink = document.querySelector('.register-link');
  // loginLink = document.querySelector('.login-link');

  toggleActive() {
    this.isActive = true;
  }

  // registerLink = () => {
  //     this.wrapper.classList.add('active');
  // }

  // loginLink = () => {
  //     this.wrapper.classList.remove('active');
  // }
}
