import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
