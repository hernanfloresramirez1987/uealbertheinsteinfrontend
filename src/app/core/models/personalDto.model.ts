import { Empleado } from "./empleado.interface";
import { Persona } from "./persona.interface";
import { User } from "./user.interface";

export interface PersonalDto extends Persona, Empleado, User {}
