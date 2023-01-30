import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'featured',
    pathMatch: 'full'
  },
  { path: 'featured', component: SidenavComponent },
  {
    path: '**',
    redirectTo: ''
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
