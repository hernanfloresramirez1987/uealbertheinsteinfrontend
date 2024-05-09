import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppLayoutComponent } from './app.layout.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgClass, UpperCasePipe } from '@angular/common';
import { AppConfigModule } from './config/config.module';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppSidebarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppLayoutComponent,
        AppBreadcrumbComponent
    ],
    imports: [
      CommonModule,
        FormsModule,
        UpperCasePipe,
        NgClass,
        InputTextModule,
        InputSwitchModule,
        MenuModule,
        RouterModule,
        DropdownModule,
        SidebarModule,
        StyleClassModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        TooltipModule,
        AppConfigModule,
        TranslateModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
