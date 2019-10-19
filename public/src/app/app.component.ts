import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeAPI';
  constructor(private _http: HttpService) {}
  ngOnInit() {
    this._http.getPokemon();
  }
}
