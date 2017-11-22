import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {Routes} from' @angular/router'

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home',  component: my-home-componen },
 { path: 'movie/:id', component: my-movie-component }
];
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






const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent }
];
