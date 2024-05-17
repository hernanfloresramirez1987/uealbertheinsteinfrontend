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

  wrapperClass: string = ''; // Clase para el elemento wrapper
  visible: boolean = false;
  //backgroundColor: string = '#081b29'; // Color de fondo
  isActive: boolean = true;
  fg!: FormGroup<{
    username: FormControl<string | null>,
    password: FormControl<string | null>,
  }>;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.fg = this.fb.group({
      username: new FormControl('', { validators: [Validators.required]}),
      password: new FormControl('', { validators: [Validators.required]}),
    });
    this.startTimer();
  }
  startTimer(): void {
    setTimeout(() => {
      this.isActive = !this.isActive;
    }, 650);
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
    this.wrapperClass = this.isActive ? 'active' : '';
  }

  async login() {
    const {username, password } = this.fg.value;
    console.log(username, password);
    if(username && password) {
    await this.authService.login(this.fg.value)
      .subscribe(t => {
        if( t.status === 201) {
          this.router.navigate(['/autorizationrol']);
        }
      })
    }
  }
}
