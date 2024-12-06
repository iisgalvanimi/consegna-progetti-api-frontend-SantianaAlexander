import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta1 } from './carta1.model';

@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  
  carta1Data: Carta1 | null = null;  
  loading: boolean = true;  
  error: boolean = false;   

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getDittoCard(); 
  }

 
  getDittoCard(): void {
    this.http.get<{ data: Carta1[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Ditto' 
      }
    }).subscribe({
      next: (response) => {
        
        if (response.data.length > 0) {
          this.carta1Data = response.data[0];  
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
