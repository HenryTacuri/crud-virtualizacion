import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'crud', loadChildren: () => import('./carros/carros.module').then(m => m.CarrosModule)},
  {path: '**', redirectTo: 'crud'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
