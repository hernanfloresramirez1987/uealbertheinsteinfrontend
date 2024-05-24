import { FormControl, FormGroup } from "@angular/forms";

export interface P_A_Estudiante2Tutores {
  u_username: string;
  u_password: string;
  u_rol: number;
  p_doc: string;
  p_tipodoc: number;
  p_extdoc: number;
  p_nombre: string;
  p_app: string;
  p_apm: string;
  p_fnaci: string;
  p_sexo: boolean;
  p_estadociv: string;
  p_dir: string;
  p_telcel: string;
  p_email: string;
  e_formacion: number;
  e_idcargo: number;
  e_nua: string;
  e_fing: string;
  e_salario: number;
}


export interface EstudianteForm {
  est_tipodoc: FormControl<number | null>;
  est_extdoc: FormControl<number | null>;
  est_doc: FormControl<string | null>;
  est_nombre: FormControl<string | null>;
  est_app: FormControl<string | null>;
  est_apm: FormControl<string | null>;
  est_fnaci: FormControl<string | null>;
  est_sexo: FormControl<boolean | null>;
  est_estadociv: FormControl<string | null>;
  est_dir: FormControl<string | null>;
  est_telcel: FormControl<string | null>;
  est_email: FormControl<string | null>;
}

export interface TutorForm {
  tut_tipodoc: FormControl<number | null>;
  tut_doc: FormControl<string | null>;
  tut_extdoc: FormControl<number | null>;
  tut_nombre: FormControl<string | null>;
  tut_app: FormControl<string | null>;
  tut_apm: FormControl<string | null>;
  tut_fnaci: FormControl<string | null>;
  tut_sexo: FormControl<boolean | null>;
  tut_estadociv: FormControl<string | null>;
  tut_dir: FormControl<string | null>;
  tut_telcel: FormControl<string | null>;
  tut_email: FormControl<string | null>;
}

export interface MainForm {
  estudiante: EstudianteData;
  tutor1: TutorData;
  tutor2: TutorData;
}





export interface EstudianteData {
  est_tipodoc: number | null;
  est_extdoc: number | null;
  est_doc: string | null;
  est_nombre: string | null;
  est_app: string | null;
  est_apm: string | null;
  est_fnaci: string | null;
  est_sexo: boolean | null;
  est_estadociv: string | null;
  est_dir: string | null;
  est_telcel: string | null;
  est_email: string | null;
}

export interface TutorData {
  tut_tipodoc: number | null;
  tut_doc: string | null;
  tut_extdoc: number | null;
  tut_nombre: string | null;
  tut_app: string | null;
  tut_apm: string | null;
  tut_fnaci: string | null;
  tut_sexo: boolean | null;
  tut_estadociv: string | null;
  tut_dir: string | null;
  tut_telcel: string | null;
  tut_email: string | null;
}
