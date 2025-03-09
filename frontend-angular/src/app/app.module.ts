import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importy NG-ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';


//Components
import { SideMenuComponent } from './components/side-menu.component';
import { CarouselPageComponent } from './pages/carousel/carousel.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { DelayedFormPageComponent } from './pages/delayed-form/delayed-form.component';
import { LazyPageComponent } from './pages/lazy-page/lazy.component';
import { CommonModule } from '@angular/common';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { RouterModule } from '@angular/router';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';


@NgModule({
    declarations: [
        AppComponent,
        SideMenuComponent,
        DashboardPageComponent,
        CarouselPageComponent,
        LazyPageComponent,
        DelayedFormPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NzLayoutModule,
        NzMenuModule,
        NzCarouselModule,
        NzButtonModule,
        NzTableModule,
        NzIconModule,
        FormsModule,
        AppRoutingModule,
        CommonModule,
        NzModalModule,
        RouterModule,
        NzCardModule,
        NzTypographyModule,
        NzInputModule,
        NzButtonModule,
        NzMessageModule,
        ReactiveFormsModule,
        NzFormModule
    ],
    providers: [NzModalService, { provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
