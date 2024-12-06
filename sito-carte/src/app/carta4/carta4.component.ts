import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta4 } from './carta4.model';

@Component({
  selector: 'app-carta4',
  templateUrl: './carta4.component.html',
  styleUrls: ['./carta4.component.css']
})
export class Carta4Component implements OnInit {

  carta4Data: Carta4 | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCartaData();
  }

  getCartaData(): void {
    this.http.get<{ data: Carta4[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Gengar'
      }
    }).subscribe({
      next: (response) => {
        if (response.data.length > 0) {
          this.carta4Data = response.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }
}
