import { AfterContentInit, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateLanService } from '../core/_services/translate-lan.service';
// import { MenuSidebarService } from '../core/_services/menu-sidebar.service';
import { timer } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenuComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {
    this.model = [
        {
            label: 'Dashboard', icon: 'pi pi-home',
            items: [
                { label: 'SaaS', icon: 'pi pi-desktop', routerLink: ['/'] },
                { label: 'Sales', icon: 'pi pi-chart-bar', routerLink: ['/dashboard-sales'] }
            ]
        },
        {
            label: 'Hierarchy', icon: 'pi pi-align-left',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-align-left' },
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 1.2.1', icon: 'pi pi-align-left' }
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-align-left' },
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 2.2.1', icon: 'pi pi-align-left' },
                            ]
                        },
                    ]
                }
            ]
        }
    ];
  }

    _translate  = inject(TranslateService)
    // _translateLanService  = inject(TranslateLanService)
    // layoutService = inject(LayoutService)
    // menuJson = inject(MenuSidebarService)
    // model = signal<MenuItem[]>([])

}
