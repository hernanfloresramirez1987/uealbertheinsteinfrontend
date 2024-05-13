import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  @ViewChild('.wrapper') wrapper!: any;

  // isActive: boolean = false;
  wrapperClass: string = ''; // Clase para el elemento wrapper
  visible: boolean = false;
  backgroundColor: string = '#081b29'; // Color de fondo


  isActive: boolean = true;
  fg!: FormGroup<{
    username: FormControl<string | null>,
    password: FormControl<string | null>,
  }>;
  // fg: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.fg = this.fb.group({
      username: new FormControl('', { validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)]}),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)]}),
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
  login() {
    const {username, password } = this.fg.value;
    console.log(username, password);
    // this.authService.login(this.fg.value.username, this.fg.value.password)
    //   .subscribe(t => {
    //     console.log('respuesta: ', t);
    //   })
  }
}
