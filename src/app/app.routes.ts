import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { SeminairesListComponent } from './seminaires-list/seminaires-list.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seminaires', component: SeminairesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
