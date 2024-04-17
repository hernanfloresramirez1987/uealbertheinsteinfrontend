import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  imports: [
    CommonModule,
    EmployesRoutingModule,
    SidebarModule
  ]
})
export class EmployesModule { }
