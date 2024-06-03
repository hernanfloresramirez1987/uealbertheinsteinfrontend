import { Component, OnInit, signal } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
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
import { RolService } from '../../../../services/rol.service';
import { TipodocService } from '../../../../services/tipodoc.service';
import { DatePipe } from '@angular/common';
import { ExtdocService } from '../../../../services/extdoc.service';
import { EmployesService } from '../../../../services/employes.service';
import { Router, RouterModule } from '@angular/router';
import { catchError, debounceTime, throwError } from 'rxjs';
import { PersonaService } from '../../../../services/persona.service';
import { FileUploadModule } from 'primeng/fileupload';
import { P_A_Personal } from '../../../../models/pa_personal.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employes-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RadioButtonModule, CardModule, InputTextModule, MultiSelectModule, DropdownModule, CalendarModule, SelectButtonModule, ToggleButtonModule, SidebarModule, FloatLabelModule, RouterModule, FileUploadModule],
  providers: [CargoService, TipoempleadoService, TipodocService, DatePipe],
  templateUrl: './employes-register.component.html',
    styleUrl: './employes-register.component.css'
}) //
export default class EmployesRegisterComponent implements OnInit {
  visible: boolean = false;
  dataDtoEmployes: P_A_Personal = {} as P_A_Personal;
  fg!: FormGroup<{
    username: FormControl<string | null>,
    password: FormControl<string | null>,
    rol: FormControl<number | null>,

    tipodoc: FormControl<number | null>,
    doc: FormControl<string | null>,
    extdoc: FormControl<number | null>,
    nombre: FormControl<string | null>,
    app: FormControl<string | null>,
    apm: FormControl<string | null>,
    fnaci: FormControl<string | null>,
    sexo: FormControl<boolean | null>,
    estadociv: FormControl<string | null>,
    dir: FormControl<string | null>,
    telcel: FormControl<string | null>,
    email: FormControl<string | null>,

    nua: FormControl<string | null>,
    idtipo: FormControl<number | null>,
    idcargo: FormControl<number | null>,
    salario: FormControl<number | null>
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
  stateSearchCI: boolean = false;

  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder, private employesService: EmployesService, private personaService: PersonaService, private cargoService: CargoService, private tipoempleadoService: TipoempleadoService, private extdocService: ExtdocService, private tipodocService: TipodocService, private rolService: RolService, private datePipe: DatePipe, private router: Router) {
    this.loadCargo();
    this.loadTipoEmpleado();
    this.loadTipoDoc();
    this.loadExtDoc();
    this.loadRols();
    this.initForm();
  }
  ngOnInit(): void {
    this.onChangeForm();

  }
  initForm() {
    this.fg = this.fb.group({
      username: new FormControl('', { validators: [Validators.required]}),
      password: new FormControl('', { validators: [Validators.required]}),
      rol: new FormControl(0, { validators: [Validators.required]}),
      tipodoc: new FormControl(0, { validators: [Validators.required]}),
      extdoc: new FormControl(0, { validators: [Validators.required]}),
      doc: new FormControl('', { validators: [Validators.required]}),
      nombre: new FormControl('', { validators: [Validators.required]}),
      app: new FormControl('', { validators: [Validators.required]}),
      apm: new FormControl('', { validators: [Validators.required]}),
      fnaci: new FormControl('', { validators: [Validators.required]}),
      sexo: new FormControl(true, { validators: [Validators.required]}),
      estadociv: new FormControl('', { validators: [Validators.required]}),
      dir: new FormControl('', { validators: [Validators.required]}),
      telcel: new FormControl('', { validators: [Validators.required]}),
      email: new FormControl('', { validators: [Validators.required, Validators.email]}),
      idtipo: new FormControl(0, { validators: [Validators.required]}),
      idcargo: new FormControl(0, { validators: [Validators.required]}),
      nua: new FormControl('', { validators: []}),
      // fing: new FormControl('', { validators: [Validators.required]}),
      salario: new FormControl(0, { validators: [Validators.required]})
    });
  }
  onChangeForm() {
    this.fg.valueChanges
      .pipe(debounceTime(2000))
      .subscribe({
        next: (t: any) => { 
          console.log(t);
          console.log(t.tipodoc);
          this.dataDtoEmployes = {
            u_username: t.username,
            u_password: t.password,
            u_rol: (t.rol && t.rol.length > 0) ? t.rol[0].id : t.rol,
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
            e_formacion: t.idtipo.id,
            e_idcargo: t.idcargo.id,
            e_nua: t.nua,
            e_fing: '',
            e_salario: t.salario
          }
          console.log('doc: ', this.dataDtoEmployes, this.stateSearchCI);
        },
        error: (e) => console.log(e)
      });
  }

  changeDoc(doc: string) {
    const docControl = this.fg.get('doc') as FormControl;
    docControl.valueChanges
      .subscribe(t => {
        console.log(t);
        if (t !== '' && this.stateSearchCI === false) {
          //console.log('siiiiiiii');
          this.searchCI(t);
        } else {
          //console.log("nooooooooooooo")
          this.stateSearchCI = (t === '')? false: true;
        }
      });
  }

  async searchCI(ci: string) {
    await this.personaService.getOneCi(ci)
      .pipe(debounceTime(2500))
      .subscribe({
        next: ((t: any) => {
          console.log(t);
          // if (this.stateSearchCI) {
            this.stateSearchCI = true;
            const patchedValues = {
              ...t,
              idtipo: t.tipodoc,
              extdoc: t.extdoc
            };
            this.fg.patchValue(patchedValues);
            console.log(`t.tipodoc: `, t.tipodoc);
            //this.fg.setValue(patchedValues);

            //.get('idtipo').setValue(t.tipodoc);
          // }
        }),
        error: ((err: any) => console.log(err)),
        complete() {
            console.log('completo!!!!!!');
        },
      })
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
  toggleSidebar = () => this.visible = !this.visible;

  savePromise() {
    this.employesService.savePromise(this.dataDtoEmployes)
      .then((t) => {
        console.log(t);
        console.log(t[0][0].Status);
        if(Number(t[0][0].Status) === 201) {
          console.log("Se registro exitosamente")
          this.router.navigate(['/employes']);
        }
      })
  }
  // saveDataObservable() {
  //   console.log(this.fg.value);
  //   console.log(this.dataDtoEmployes);
  //   const aux = this.employesService.saveEmploye(this.dataDtoEmployes)
  //     .subscribe(t => {
  //       console.log(t)
  //       console.log(t.status)
  //       if(t.status === '201') {
  //         console.log("Se registro exitosamente")
  //         this.router.navigate(['/employes']);
  //       }
  //     });
  //   aux.unsubscribe();
  // }

  formatearFecha(fecha: Date | null): string {
    if (fecha) {
      return this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';
    }
    return '';
  }

  clear () {
    this.fg.reset();
    this.stateSearchCI = false;
  }
  onUpload(e: any) {
    console.log(e);
  }
}
