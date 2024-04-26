import { Component, signal } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { TipoempleadoService } from '../../services/tipoempleado.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [HttpClientModule, MultiSelectModule,DropdownModule],
  providers: [TipoempleadoService],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export default class AuthorizationComponent {
  itemsTipoempleado = signal([]);

  constructor(private tipoempleadoService: TipoempleadoService) {
    this.loadTipoEmpleado();
  }

  async loadTipoEmpleado() {
    await this.tipoempleadoService.getAll()
      .subscribe({
        next: (t: any) => this.itemsTipoempleado.set(t),
        error: (err) =>{console.log(err)}
      });
  }
}
