import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Carta1 } from './carta1.model';

interface PokemonData {
  name: string;
  
}

@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  
  carta1Data!: Carta1;
  data!: Object;
  loading!: boolean;
  o!: Observable<Object>;
  oCarta1!: Observable<Carta1[]>;
  constructor(public http: HttpClient) { }

   ngOnInit(): void {
    this.makeTypedRequest();  
  }
   
  makeTypedRequest(): void {
    this.http.get<Carta1>('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe({
        next: (data) => {
          this.carta1Data = data;  // Assegna i dati alla variabile carta1Data
          this.loading = false;  // Imposta il loading a false quando i dati sono arrivati
        },
      });
  }
 
   getData = (d: PokemonData) => {
    this.data = d;
    this.loading = false;
  }


}
