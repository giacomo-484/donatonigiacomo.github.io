import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { CarbonaraComponent } from './pages/carbonara/carbonara';
import { RisottotastasalComponent } from './pages/risottotastasal/risottotastasal';
import { PizzoccheriComponent } from './pages/pizzoccheri/pizzoccheri';

export const routes: Routes = [
    { component: LandingComponent, path:'landing' },
    { component: CarbonaraComponent, path:'carbonara' },
    { component: RisottotastasalComponent, path:'risottotastasal'},
    { component: PizzoccheriComponent, path: 'pizzoccheri'},

];
