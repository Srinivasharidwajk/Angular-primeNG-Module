import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PrimeNgModuleList } from './PrimeNgModuleList';
import {SharedModule} from 'primeng/api';
import { WishMessageComponent } from './components/wish-message/wish-message.component';
import { ProdItemComponent } from './components/prod-item/prod-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WishMessageComponent,
    ProdItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...PrimeNgModuleList.primeNgModuleList,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
