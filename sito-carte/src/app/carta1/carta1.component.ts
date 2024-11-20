import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface PokemonData {
  name: string;
  
}

@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  
  data!: PokemonData;
   loading!: boolean;
   o! :Observable<any>;
   constructor(public http: HttpClient) {}

   ngOnInit(): void {
    this.makeRequest();  // Effettua la richiesta subito dopo che il componente è stato caricato
  }
   
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto');
     this.o.subscribe(this.getData);
   }
   getData = (d: PokemonData) => {
    this.data = d;
    this.loading = false;
  }


}
