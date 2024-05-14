import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  menu: MenuItem[] = [];

  @ViewChild('searchinput') searchInput!: ElementRef;

  @ViewChild('menubutton') menuButton!: ElementRef;

  searchActive = false;

  items: MenuItem[];
  lan: string

  constructor(public layoutService: LayoutService) {
      this.lan = ''//TranslateLanService.lan

      this.items = [
          {
              label: 'EN',
              // icon: 'pi pi-refresh',
              command: () => {
                 this.en()
              }
          },
          {
              label: 'ES',
              // icon: 'pi pi-refresh',
              command: () => {
                 this.es()
              }
          }
      ];
  }

  onMenuButtonClick() {
      this.layoutService.onMenuToggle();
  }

  activateSearch() {
      this.searchActive = true;
      setTimeout(() => {
          this.searchInput.nativeElement.focus();
      }, 100);
  }

  deactivateSearch() {
      this.searchActive = false;
  }

  removeTab(event: MouseEvent, item: MenuItem, index: number) {
      this.layoutService.onTabClose(item, index);
      event.preventDefault();
  }
  get layoutTheme(): string {
    return this.layoutService.config().layoutTheme;
  }

  get colorScheme(): string {
      return this.layoutService.config().colorScheme;
  }

  get logo(): string {
    const path = 'assets/img/logo2.png';
    // const path = (this.layoutTheme === 'primaryColor'  && !(this.layoutService.config().theme  == "yellow")) ? 'light.png' : (this.colorScheme === 'light' ? 'dark.png' : 'light.png');
    return path;
}

  get tabs(): MenuItem[] {
      return this.layoutService.tabs;
  }

  es(){
      // this.lan = TranslateLanService.lan = 'es'
      // this._translate.changeLanguage$.next(TranslateLanService.lan)
  }
  en(){
      // this.lan = TranslateLanService.lan = 'en'
      // this._translate.changeLanguage$.next(TranslateLanService.lan)
  }
}
