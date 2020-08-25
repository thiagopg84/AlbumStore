import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { ProdutoComponent } from './loja/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
