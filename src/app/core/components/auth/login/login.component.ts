import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  @ViewChild('.wrapper') wrapper!: any;

  // isActive: boolean = false;
  wrapperClass: string = ''; // Clase para el elemento wrapper
  backgroundColor: string = '#081b29'; // Color de fondo


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

  // Método para cambiar la clase del wrapper
  toggleActive(): void {
    this.isActive = !this.isActive;
    this.wrapperClass = this.isActive ? 'active' : '';
  }

  // registerLink = () => {
  //     this.wrapper.classList.add('active');
  // }

  // loginLink = () => {
  //     this.wrapper.classList.remove('active');
  // }
}
