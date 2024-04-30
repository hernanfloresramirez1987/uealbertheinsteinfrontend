import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  imports: [
    // CommonModule,
    ReactiveFormsModule, FormsModule, CardModule, InputTextModule, DropdownModule, CalendarModule, SelectButtonModule, ToggleButtonModule, RadioButtonModule, SidebarModule,
    EmployesRoutingModule
  ]
})
export class EmployesModule { }
