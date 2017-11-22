import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHomeComponenComponent } from './my-home-componen/my-home-componen.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponenComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
