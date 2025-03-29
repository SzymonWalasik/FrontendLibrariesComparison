import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselPageComponent } from './pages/carousel/carousel.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { DelayedFormPageComponent } from './pages/delayed-form/delayed-form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LazyPageComponent } from './pages/lazy-page/lazy.component';

const routes: Routes = [
    { path: '', component: DashboardPageComponent },
    { path: 'carousel', component: CarouselPageComponent },
    { path: 'lazy', component: LazyPageComponent },
    { path: 'delay', component: DelayedFormPageComponent },
    { path: 'gallery', component: GalleryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
