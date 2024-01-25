import { Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';

export const routes: Routes = [
    { path: 'page/:id', component: PageComponent, data: { mainImage: 'assets/images/img1.svg' }},
  ];
  