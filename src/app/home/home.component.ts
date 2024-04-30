import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CardModule, JsonPipe, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  public currentLang!: string;

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || translate.getDefaultLang();
  }

  changeLang() {
    this.currentLang === 'es' ? this.translate.use('en') : this.translate.use('es');
    this.currentLang = this.translate.currentLang;
  }
}
