import { Component, OnInit, signal } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { PersonalDto } from '../../../../models/personalDto.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CargoService } from '../../../../services/cargo.service';
import { TipoempleadoService } from '../../../../services/tipoempleado.service';
// import { CommonModule } from '@angular/common';
import { RolService } from '../../../../services/rol.service';
import { TipodocService } from '../../../../services/tipodoc.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ExtdocService } from '../../../../services/extdoc.service';
import { P_A_Personal } from '../../../../models/pa_personal.interface';
import { EmployesService } from '../../../../services/employes.service';

@Component({
  selector: 'app-employes-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RadioButtonModule, CardModule, InputTextModule, MultiSelectModule, DropdownModule, CalendarModule, SelectButtonModule, ToggleButtonModule, SidebarModule, FloatLabelModule],
  providers: [CargoService, TipoempleadoService, TipodocService, DatePipe],
  templateUrl: './employes-register.component.html',
  styleUrl: './employes-register.component.css'
})
export default class EmployesRegisterComponent implements OnInit {
  visible: boolean = false;
  dataDtoEmployes: P_A_Personal = {} as P_A_Personal;
  fg!: FormGroup<{
    username: FormControl<string>,
    password: FormControl<string>,
    rol: FormControl<number>,

    tipodoc: FormControl<number>,
    doc: FormControl<string>,
    extdoc: FormControl<number>,
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
    // fing: FormControl<string>,
    salario: FormControl<number>
  }>;

  sexo: any[] = [ { name: 'Varon', value: true }, { name: 'Mujer', value: 0 }];

  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

  value: string = 'off';

  itemsCargo = signal([]);
  itemsTipoempleado = signal([]);
  itemsTipodoc = signal([]);
  itemsRols = signal([]);
  itemsExtdocs = signal([]);
  itemsStadoCivil = [
    {name: 'Soltero/a'},
    {name: 'Casado/a'},
    {name: 'Viudo/a'},
    {name: 'Divorciado/a'}
  ];
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCity: any | undefined;

  constructor(private fb: FormBuilder, private employesService: EmployesService, private cargoService: CargoService, private tipoempleadoService: TipoempleadoService, private extdocService: ExtdocService, private tipodocService: TipodocService, private rolService: RolService, private datePipe: DatePipe) {
    this.fg = this.fb.group({
      username: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      password: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      rol: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      tipodoc: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      extdoc: new FormControl(0, { validators: [Validators.required], nonNullable: true}),
      doc: new FormControl('', { validators: [Validators.required], nonNullable: true}),
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
      // fing: new FormControl('', { validators: [Validators.required], nonNullable: true}),
      salario: new FormControl(0, { validators: [Validators.required], nonNullable: true})
    });
    this.loadCargo();
    this.loadTipoEmpleado();
    this.loadTipoDoc();
    this.loadExtDoc();
    this.loadRols();
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm = () => {
    setTimeout(() => {

    this.fg.valueChanges.subscribe({
      next: (t: any) => {
        console.log(t)
        this.dataDtoEmployes = {
          u_username: t.username,
          u_password: t.password,
          u_rol: (t.rol.length > 0) ? t.rol[0].id : t.rol,
          p_doc: t.doc,
          p_tipodoc: t.tipodoc.id,
          p_extdoc: t.extdoc.id,
          p_nombre: t.nombre,
          p_app: t.app,
          p_apm: t.apm,
          p_fnaci: (t.fnaci) ? this.formatearFecha(t.fnaci) : '',
          p_sexo: t.sexo,
          p_estadociv: t.estadociv.name,
          p_dir: t.dir,
          p_telcel: t.telcel,
          p_email: t.email,
          e_idcargo: t.idcargo.id,
          e_idtipo: t.idtipo.id,
          e_fing: '',
          e_salario: t.salario
        }
        console.log(this.dataDtoEmployes);
      },
      error: (e) => console.log(e)
    }); //console.log(this.fg.value);
  });
  }
  async loadCargo() {
    await this.cargoService.getAll()
      .subscribe({
        next: (t: any) => {this.itemsCargo.set(t); console.log(t)},
        error: (err) => {console.log(err)},
      });
  }
  async loadTipoEmpleado() {
    await this.tipoempleadoService.getAll()
      .subscribe({
        next: (t: any) => {this.itemsTipoempleado.set(t); console.log(t)},
        error: (err) =>console.log(err)
      });
  }
  async loadTipoDoc() {
    await this.tipodocService.getAllTipoDoc()
      .subscribe({
        next: (t: any) => this.itemsTipodoc.set(t),
        error: ((err: Error) => console.log(err))
      })
  }
  async loadExtDoc() {
    await this.extdocService.getAllExtDocs()
      .subscribe({
        next: (t: any) => {this.itemsExtdocs.set(t); console.log(t);},
        error: ((err: Error) => console.log(err))
      })
  }
  async loadRols() {
    await this.rolService.getAllRols()
      .subscribe({
        next: (t: any) => this.itemsRols.set(t),
        error: ((err: Error) => console.log(err))
      })
  }
  toggleSidebar() {
    this.visible = !this.visible;
  }
  saveData = () => {
    console.log(this.fg.value);
    console.log(this.dataDtoEmployes);
    this.employesService.saveEmploye(this.dataDtoEmployes)
      .subscribe(t => console.log(t));
  }

  formatearFecha(fecha: Date | null): string {
    if (fecha) {
      return this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';
    }
    return '';
  }
}
