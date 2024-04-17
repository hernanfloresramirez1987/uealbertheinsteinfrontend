import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { PersonalDto } from '../../../models/personalDto.model';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export default class EmployesComponent {
  visible: boolean = true;
  dataDtoEmployes: PersonalDto = {} as PersonalDto;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.visible = !this.visible;
  }
}
