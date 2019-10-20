import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ExchangeRatesComponent } from './modules/exchange-rates/exchange-rates.component';
import { ExchangeService } from './modules/services/exchange-rates/exchange.service';
import { SettingsService } from './modules/services/settings/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from "ng2-currency-mask";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExchangeRatesComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
  ],
  providers: [ExchangeService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
