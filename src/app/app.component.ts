import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  powitanie: string = 'pierwsza-nieskomplikowana-aplikacja';
  tekstNaDzis: string = 'Głowa do góry'
  nowaWiadomosc: string = 'Cześć Wszystkim'
}
