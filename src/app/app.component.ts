import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AppLayoutModule } from './layout/app.layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AppLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  title = 'uealbertheinstein_frontend';
}
