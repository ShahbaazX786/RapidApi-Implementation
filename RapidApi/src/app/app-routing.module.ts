import { HomeComponent } from './components/home/home.component';
import { ChuckNorrisJokesComponent } from './components/chuck-norris-jokes/chuck-norris-jokes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chuck',component:ChuckNorrisJokesComponent},
  {path:'**',component:pnf},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
