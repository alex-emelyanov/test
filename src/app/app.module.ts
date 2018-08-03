import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
 
import { HttpClientModule }   from '@angular/common/http';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
 
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule],
    declarations: [ AppComponent, ClientsDetailComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }