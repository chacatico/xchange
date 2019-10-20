import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    api_url: 'http://data.fixer.io/api/latest?access_key=890d27229f1e5bfe15dbe119246cc727',
  };

  constructor() { }

  getSettings() {

    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    } else {
      localStorage.setItem( 'settings', JSON.stringify(this.settings) );
    }
  }

}


interface Settings {
  api_url: string;
}
