import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  url = JSON.parse(localStorage.getItem('settings'));

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getRates() {
    console.log('this.url', this.url);
    return this._httpClient.get(this.url.api_url);
  }

}

