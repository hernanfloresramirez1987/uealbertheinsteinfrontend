import { Component, signal } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { TipoempleadoService } from '../../services/tipoempleado.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [RouterModule, HttpClientModule, MultiSelectModule, DropdownModule, ButtonModule],
  providers: [TipoempleadoService],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export default class AuthorizationComponent {
  itemsTipoempleado = signal([]);

  constructor(private tipoempleadoService: TipoempleadoService, private router: Router) {
    this.loadTipoEmpleado();
  }

  async loadTipoEmpleado() {
    await this.tipoempleadoService.getAll()
      .subscribe({
        next: (t: any) => this.itemsTipoempleado.set(t),
        error: (err) =>{console.log(err)}
      });
  }
  goDashboard = () => this.router.navigate(['/dashboard']);
}
