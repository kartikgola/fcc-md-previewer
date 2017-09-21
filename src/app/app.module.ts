import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParsedMdPipe } from './parsed-md.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParsedMdPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
