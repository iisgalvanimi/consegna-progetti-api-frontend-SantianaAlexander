import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta2 } from './carta2.model';

@Component({
  selector: 'app-carta2',
  templateUrl: './carta2.component.html',
  styleUrls: ['./carta2.component.css']
})
export class Carta2Component implements OnInit {

  carta2Data: Carta2 | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCartaData();
  }

  getCartaData(): void {
    this.http.get<{ data: Carta2[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Pinsir'
      }
    }).subscribe({
      next: (response) => {
        if (response.data.length > 0) {
          this.carta2Data = response.data[0];
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
