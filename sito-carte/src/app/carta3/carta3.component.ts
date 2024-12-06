import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta3 } from './carta3.model';

@Component({
  selector: 'app-carta3',
  templateUrl: './carta3.component.html',
  styleUrls: ['./carta3.component.css']
})
export class Carta3Component implements OnInit {

  carta3Data: Carta3 | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCartaData();
  }

  getCartaData(): void {
    this.http.get<{ data: Carta3[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Mew'
      }
    }).subscribe({
      next: (response) => {
        if (response.data.length > 0) {
          this.carta3Data = response.data[0];
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
