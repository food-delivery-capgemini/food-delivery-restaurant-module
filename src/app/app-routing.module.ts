import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMenuComponent } from './editmenu.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  Routes = [
    {path: "home", component: WelcomeComponent},
    {path: "", component: WelcomeComponent},
    {path: "editmenu", component: EditMenuComponent}
    ];
}
