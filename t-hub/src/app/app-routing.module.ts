import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  
  {path:'framework',component:FrameworksComponent},
  {path:'form',component:FormComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
