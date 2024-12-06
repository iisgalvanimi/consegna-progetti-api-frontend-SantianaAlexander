import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta5 } from './carta5.model';

@Component({
  selector: 'app-carta5',
  templateUrl: './carta5.component.html',
  styleUrls: ['./carta5.component.css']
})
export class Carta5Component implements OnInit {

  carta5Data: Carta5 | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCartaData();
  }

  getCartaData(): void {
    this.http.get<{ data: Carta5[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Bulbasaur'
      }
    }).subscribe({
      next: (response) => {
        if (response.data.length > 0) {
          this.carta5Data = response.data[0];
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
