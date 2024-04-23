import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { PersonalDto } from '../../../models/personalDto.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,RadioButtonModule, CardModule, InputTextModule, MultiSelectModule, DropdownModule, CalendarModule, SelectButtonModule, ToggleButtonModule, SidebarModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export default class EmployesComponent {
  visible: boolean = false;
  dataDtoEmployes: PersonalDto = {} as PersonalDto;
  fg!: FormGroup<{
    username: FormControl<string>,
    password: FormControl<string>,
    rol: FormControl<number>,

    doc: FormControl<string>,
    tipodoc: FormControl<number>,
    nombre: FormControl<string>,
    app: FormControl<string>,
    apm: FormControl<string>,
    fnaci: FormControl<string>,
    sexo: FormControl<boolean>,
    estadociv: FormControl<string>,
    dir: FormControl<string>,
    telcel: FormControl<string>,
    email: FormControl<string>,

    idtipo: FormControl<number>,
    idcargo: FormControl<number>,
    fing: FormControl<string>,
    salario: FormControl<number>
  }>;
  sexo: any[] = [ { name: 'Varon', value: true }, { name: 'Mujer', value: 0 }];

  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

    value: string = 'off';

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCity: any | undefined;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      username: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      password: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      rol: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      doc: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      tipodoc: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      nombre: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      app: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      apm: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      fnaci: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      sexo: new FormControl(true, { validators: [Validators.required], nonNullable: true}),
      estadociv: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      dir: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      telcel: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      email: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      idtipo: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      idcargo: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      fing: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      salario: new FormControl(0, { validators: [Validators.required], nonNullable: true})
    });
  }

  toggleSidebar() {
    this.visible = !this.visible;
  }
}
