import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserJferreirazComponent } from './components/user-jferreiraz/user-jferreiraz.component';

@NgModule({
  declarations: [
    AppComponent,
    UserJferreirazComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
