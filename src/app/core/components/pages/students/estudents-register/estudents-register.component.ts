import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CargoService } from '../../../../services/cargo.service';
import { TipoempleadoService } from '../../../../services/tipoempleado.service';
import { TipodocService } from '../../../../services/tipodoc.service';
import { DatePipe } from '@angular/common';
import { PersonaService } from '../../../../services/persona.service';
import { debounceTime } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { ExtdocService } from '../../../../services/extdoc.service';
import { EstudianteData, EstudianteForm, MainForm } from '../../../../models/pa_estudiante_2tutores.interface';

@Component({
  selector: 'app-estudents-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ButtonModule, RadioButtonModule, CardModule, InputTextModule, MultiSelectModule, DropdownModule, CalendarModule, SelectButtonModule, ToggleButtonModule, SidebarModule, FloatLabelModule, RouterModule, FileUploadModule],
  providers: [CargoService, TipoempleadoService, TipodocService, DatePipe],
  templateUrl: './estudents-register.component.html',
  styleUrl: './estudents-register.component.css'
})
export default class EstudentsRegisterComponent {
  visible: boolean = false;
  dataDtoEstudent2tuts: any = {} as any;

  fg!: FormGroup;
  itemsStadoCivil = [
    {name: 'Soltero/a'},
    {name: 'Casado/a'},
    {name: 'Viudo/a'},
    {name: 'Divorciado/a'}
  ];

  itemsTipodoc = signal([]);
  itemsExtdocs = signal([]);
  selectedCity: any | undefined;
  stateSearchCIest: boolean = false;
  stateSearchCItut1: boolean = false;
  stateSearchCItut2: boolean = false;

  constructor(private fb: FormBuilder, private personaService: PersonaService, private extdocService: ExtdocService, private tipodocService: TipodocService) {
    this.loadTipoDoc();
    this.loadExtDoc();
    this.initForm();
  }

  initForm(): void {
    this.fg = this.fb.group({
        estudiante: this.fb.group({
        est_tipodoc: new FormControl<number | null>(0, [Validators.required]),
        est_extdoc: new FormControl<number | null>(0, [Validators.required]),
        est_doc: new FormControl<string | null>('', [Validators.required]),
        est_nombre: new FormControl<string | null>('', [Validators.required]),
        est_app: new FormControl<string | null>('', [Validators.required]),
        est_apm: new FormControl<string | null>('', [Validators.required]),
        est_fnaci: new FormControl<string | null>('', [Validators.required]),
        est_sexo: new FormControl<boolean | null>(true, [Validators.required]),
        est_estadociv: new FormControl<string | null>('', [Validators.required]),
        est_dir: new FormControl<string | null>('', [Validators.required]),
        est_telcel: new FormControl<string | null>('', [Validators.required]),
        est_email: new FormControl<string | null>('', [Validators.required, Validators.email]),
      }),
      tutor1: this.fb.group({
        tut_tipodoc: new FormControl<number | null>(0, [Validators.required]),
        tut_doc: new FormControl<string | null>('', [Validators.required]),
        tut_extdoc: new FormControl<number | null>(0, [Validators.required]),
        tut_nombre: new FormControl<string | null>('', [Validators.required]),
        tut_app: new FormControl<string | null>('', [Validators.required]),
        tut_apm: new FormControl<string | null>('', [Validators.required]),
        tut_fnaci: new FormControl<string | null>('', [Validators.required]),
        tut_sexo: new FormControl<boolean | null>(true, [Validators.required]),
        tut_estadociv: new FormControl<string | null>('', [Validators.required]),
        tut_dir: new FormControl<string | null>('', [Validators.required]),
        tut_telcel: new FormControl<string | null>('', [Validators.required]),
        tut_email: new FormControl<string | null>('', [Validators.required, Validators.email]),
      }),
      tutor2: this.fb.group({
        tut_tipodoc: new FormControl<number | null>(0, [Validators.required]),
        tut_doc: new FormControl<string | null>('', [Validators.required]),
        tut_extdoc: new FormControl<number | null>(0, [Validators.required]),
        tut_nombre: new FormControl<string | null>('', [Validators.required]),
        tut_app: new FormControl<string | null>('', [Validators.required]),
        tut_apm: new FormControl<string | null>('', [Validators.required]),
        tut_fnaci: new FormControl<string | null>('', [Validators.required]),
        tut_sexo: new FormControl<boolean | null>(true, [Validators.required]),
        tut_estadociv: new FormControl<string | null>('', [Validators.required]),
        tut_dir: new FormControl<string | null>('', [Validators.required]),
        tut_telcel: new FormControl<string | null>('', [Validators.required]),
        tut_email: new FormControl<string | null>('', [Validators.required, Validators.email]),
      })
    });

    this.changeDocEst1();
  }

  changeDocEst1(): void {
    const docControl = this.fg.get('estudiante.est_doc') as FormControl;
    docControl.valueChanges
      .pipe(debounceTime(2000))
      .subscribe(t => {
      console.log(t);
      if (t !== '' && this.stateSearchCIest === false) {
        console.log('siiiiiiii');
        this.searchCIeeest(t);
        this.stateSearchCIest = true;
      } else {
        console.log("nooooooooooooo");
        this.stateSearchCIest = t === '' ? false : true;
      }
    });
  }

  searchCIeeest(doc: string): void {
    // Simulación de una búsqueda que devuelve un objeto con datos del estudiante
    const fakeResponse: EstudianteData = {
      est_tipodoc: 1,
      est_extdoc: 2,
      est_doc: doc,
      est_nombre: 'Juan',
      est_app: 'Perez',
      est_apm: 'Lopez',
      est_fnaci: '2000-01-01',
      est_sexo: true,
      est_estadociv: 'Soltero',
      est_dir: 'Calle Falsa 123',
      est_telcel: '123456789',
      est_email: 'juan.perez@example.com'
    };

    this.updateEstudianteFormEst(fakeResponse);
  }
  updateEstudianteFormEst(data: Partial<EstudianteData>): void {
    this.fg.get('estudiante')?.patchValue(data);
  }

  // changeDocEst(val: any): void {
  //   console.log(val);
  //   const docControl = this.fg.get('estudiante.est_doc') as FormControl;
  //   docControl.valueChanges.subscribe(t => {
  //     console.log(t);
  //     if (t !== '' && this.stateSearchCIest === false) {
  //       console.log('siiiiiiii');
  //       // this.searchCIEstud(t);
  //       this.stateSearchCIest = true;
  //     } else {
  //       console.log("nooooooooooooo");
  //       this.stateSearchCIest = t === '' ? false : true;
  //     }
  //   });
  // }

  updateEstudianteForm(data: Partial<EstudianteForm>): void {
    this.fg.get('estudiante')?.patchValue(data);
  }
  async searchCIanterior(ci: string): Promise<any> {
    return await this.personaService.getOneEmployeCi(ci)
      .pipe(debounceTime(2000))
      .subscribe({
        next: ((t: any) => {
          console.log(t);
          console.log(this.stateSearchCIest);
          // if (this.stateSearchCIest) {
            this.stateSearchCIest = true;
            // this.fg.patchValue(t);
            return {data: t, state: true};
          // }
        }),
        error: ((err: any) => { console.log(err);
          return {data: err, state: false};} )
      })
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

  toggleSidebar = () => this.visible = !this.visible;

  clear () {
    this.fg.reset();
    this.stateSearchCIest = false;
    this.stateSearchCItut1 = false;
    this.stateSearchCItut2 = false;
  }
}
