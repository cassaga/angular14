import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule  ,  UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
