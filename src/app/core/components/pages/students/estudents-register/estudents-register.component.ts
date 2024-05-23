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

  fg!: FormGroup<{
    est_tipodoc: FormControl<number | null>,
    est_doc: FormControl<string | null>,
    est_extdoc: FormControl<number | null>,
    est_nombre: FormControl<string | null>,
    est_app: FormControl<string | null>,
    est_apm: FormControl<string | null>,
    est_fnaci: FormControl<string | null>,
    est_sexo: FormControl<boolean | null>,
    est_estadociv: FormControl<string | null>,
    est_dir: FormControl<string | null>,
    est_telcel: FormControl<string | null>,
    est_email: FormControl<string | null>,

    tut1_tipodoc: FormControl<number | null>,
    tut1_doc: FormControl<string | null>,
    tut1_extdoc: FormControl<number | null>,
    tut1_nombre: FormControl<string | null>,
    tut1_app: FormControl<string | null>,
    tut1_apm: FormControl<string | null>,
    tut1_fnaci: FormControl<string | null>,
    tut1_sexo: FormControl<boolean | null>,
    tut1_estadociv: FormControl<string | null>,
    tut1_dir: FormControl<string | null>,
    tut1_telcel: FormControl<string | null>,
    tut1_email: FormControl<string | null>,

    tut2_tipodoc: FormControl<number | null>,
    tut2_doc: FormControl<string | null>,
    tut2_extdoc: FormControl<number | null>,
    tut2_nombre: FormControl<string | null>,
    tut2_app: FormControl<string | null>,
    tut2_apm: FormControl<string | null>,
    tut2_fnaci: FormControl<string | null>,
    tut2_sexo: FormControl<boolean | null>,
    tut2_estadociv: FormControl<string | null>,
    tut2_dir: FormControl<string | null>,
    tut2_telcel: FormControl<string | null>,
    tut2_email: FormControl<string | null>,
  }>;
  itemsStadoCivil = [
    {name: 'Soltero/a'},
    {name: 'Casado/a'},
    {name: 'Viudo/a'},
    {name: 'Divorciado/a'}
  ];

  itemsTipodoc = signal([]);
  itemsExtdocs = signal([]);
  selectedCity: any | undefined;
  stateSearchCI: boolean = false;

  constructor(private fb: FormBuilder, private personaService: PersonaService, private extdocService: ExtdocService, private tipodocService: TipodocService) {
    this.initForm();
  }

  initForm() {
    this.fg = this.fb.group({
      est_tipodoc: new FormControl(0, { validators: [Validators.required]}),
      est_extdoc: new FormControl(0, { validators: [Validators.required]}),
      est_doc: new FormControl('', { validators: [Validators.required]}),
      est_nombre: new FormControl('', { validators: [Validators.required]}),
      est_app: new FormControl('', { validators: [Validators.required]}),
      est_apm: new FormControl('', { validators: [Validators.required]}),
      est_fnaci: new FormControl('', { validators: [Validators.required]}),
      est_sexo: new FormControl(true, { validators: [Validators.required]}),
      est_estadociv: new FormControl('', { validators: [Validators.required]}),
      est_dir: new FormControl('', { validators: [Validators.required]}),
      est_telcel: new FormControl('', { validators: [Validators.required]}),
      est_email: new FormControl('', { validators: [Validators.required, Validators.email]}),

      tut1_tipodoc: new FormControl(0, { validators: [Validators.required]}),
      tut1_extdoc: new FormControl(0, { validators: [Validators.required]}),
      tut1_doc: new FormControl('', { validators: [Validators.required]}),
      tut1_nombre: new FormControl('', { validators: [Validators.required]}),
      tut1_app: new FormControl('', { validators: [Validators.required]}),
      tut1_apm: new FormControl('', { validators: [Validators.required]}),
      tut1_fnaci: new FormControl('', { validators: [Validators.required]}),
      tut1_sexo: new FormControl(true, { validators: [Validators.required]}),
      tut1_estadociv: new FormControl('', { validators: [Validators.required]}),
      tut1_dir: new FormControl('', { validators: [Validators.required]}),
      tut1_telcel: new FormControl('', { validators: [Validators.required]}),
      tut1_email: new FormControl('', { validators: [Validators.required, Validators.email]}),

      tut2_tipodoc: new FormControl(0, { validators: [Validators.required]}),
      tut2_extdoc: new FormControl(0, { validators: [Validators.required]}),
      tut2_doc: new FormControl('', { validators: [Validators.required]}),
      tut2_nombre: new FormControl('', { validators: [Validators.required]}),
      tut2_app: new FormControl('', { validators: [Validators.required]}),
      tut2_apm: new FormControl('', { validators: [Validators.required]}),
      tut2_fnaci: new FormControl('', { validators: [Validators.required]}),
      tut2_sexo: new FormControl(true, { validators: [Validators.required]}),
      tut2_estadociv: new FormControl('', { validators: [Validators.required]}),
      tut2_dir: new FormControl('', { validators: [Validators.required]}),
      tut2_telcel: new FormControl('', { validators: [Validators.required]}),
      tut2_email: new FormControl('', { validators: [Validators.required, Validators.email]}),
    });
  }

  changeDocEst(doc: string) {
    const docControl = this.fg.get('est_doc') as FormControl;
    docControl.valueChanges
      .subscribe(t => {
        console.log(t);
        if (t !== '' && this.stateSearchCI === false) {
          console.log('siiiiiiii');
          this.searchCI(t);
          // this.stateSearchCI = true;
        } else {
          console.log("nooooooooooooo")
          this.stateSearchCI = (t === '')? false: true;
        }
      });
  }
  changeDocTut1(doc: string) {
    const docControl = this.fg.get('est_doc') as FormControl;
    docControl.valueChanges
      .subscribe(t => {
        console.log(t);
        if (t !== '' && this.stateSearchCI === false) {
          console.log('siiiiiiii');
          this.searchCI(t);
          // this.stateSearchCI = true;
        } else {
          console.log("nooooooooooooo")
          this.stateSearchCI = (t === '')? false: true;
        }
      });
  }
  changeDocTut2(doc: string) {
    const docControl = this.fg.get('est_doc') as FormControl;
    docControl.valueChanges
      .subscribe(t => {
        console.log(t);
        if (t !== '' && this.stateSearchCI === false) {
          console.log('siiiiiiii');
          this.searchCI(t);
          // this.stateSearchCI = true;
        } else {
          console.log("nooooooooooooo")
          this.stateSearchCI = (t === '')? false: true;
        }
      });
  }
  async searchCI(ci: string) {
    await this.personaService.getOneEmployeCi(ci)
      .pipe(debounceTime(2000))
      .subscribe({
        next: ((t: any) => {
          console.log(t);
          // if (this.stateSearchCI) {
            this.stateSearchCI = true;
            this.fg.patchValue(t);
          // }
        }),
        error: ((err: any) => console.log(err))
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
    this.stateSearchCI = false;
  }
}
