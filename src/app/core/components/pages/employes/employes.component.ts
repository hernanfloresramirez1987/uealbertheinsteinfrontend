import { Component, OnInit, signal } from '@angular/core';
import { EmployesService } from '../../../services/employes.service';
import { JsonPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [JsonPipe, ButtonModule, TableModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export default class EmployesComponent implements OnInit {
  stateEmployes = signal<any>({data: [], load: true, loading: false, erro: null, page: 1, rows: 15})
  employes = [];

  constructor(private employesService: EmployesService) {
    // console.log(1111)
  }

  ngOnInit(): void {
    console.log('hola como ');
    this.getlist();
  }

  getlist() {
    this.employesService.getAllEmployes()
      .subscribe(t => {
        this.stateEmployes.set({data: t, load: true, loading: false, erro: null, page: 1, rows: 15});
      });
  }
}
