import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SideNavComponent,
    FrameworksComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
