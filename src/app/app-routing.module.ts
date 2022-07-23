import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageListComponent } from './homepage-list/homepage-list.component';

const routes: Routes = [
  { path : 'homepage', component : HomepageListComponent },
  { path : 'homepage/detail/:id', component : HomepageListComponent },
  { path : '', redirectTo : 'homepage', pathMatch : 'full' }
  // { path : 'home', component : HomeComponent },
  // { path : 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
