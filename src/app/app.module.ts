import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './partial/header/header.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CurrencyComponent } from './page/currency/currency.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component'

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    HeaderComponent,
    HomeComponent,
    CurrencyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
