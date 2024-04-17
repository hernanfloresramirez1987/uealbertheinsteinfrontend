import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CardModule],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css'
})
export default class PasswordRecoveryComponent {
  @ViewChild('.wrapper') wrapper!: any;

  isActive: boolean = false;
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
    }, 400); // Multiplicamos por 1000 para convertir el tiempo de segundos a milisegundos
  }
  // registerLink = document.querySelector('.register-link');
  // loginLink = document.querySelector('.login-link');

  toggleActive() {
    this.isActive = !this.isActive;
  }

}
