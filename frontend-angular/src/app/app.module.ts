import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importy NG-ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

//Components
import { SideMenuComponent } from './components/side-menu.component';
import { CarouselPageComponent } from './pages/carousel/carousel.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { DelayedFormPageComponent } from './pages/delayed-form/delayed-form.component';
import { LazyPageComponent } from './pages/lazy-page/lazy.component';
import { CommonModule } from '@angular/common';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { RouterModule } from '@angular/router';

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
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
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
        RouterModule
    ],
    providers: [NzModalService],
    bootstrap: [AppComponent],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
