import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
import { ExchangeService } from '../services/exchange-rates/exchange.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.sass']
})
export class ExchangeRatesComponent implements AfterViewInit {

  rates = null;
  eurAmount = null;
  usdExchange = null;
  typeExchange = 'USD';
  constructor(
    public settings: SettingsService,
    public exchange: ExchangeService,
  ) {
    settings.getSettings();
    this.getRates();
  }

  ngAfterViewInit() {
    interval(100000).subscribe(() => { this.getRates(); });
  }

    getRates() {
      this.exchange.getRates().subscribe((data) => {
        console.log(data);
        this.rates = data;
      });

    }

  public exchange_rate() {
    if (this.rates.rates[this.typeExchange]) {
      this.usdExchange = this.eurAmount * this.rates.rates[this.typeExchange];
    }
  }
}
