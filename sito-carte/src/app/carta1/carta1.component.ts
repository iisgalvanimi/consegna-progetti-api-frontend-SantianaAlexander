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
  
  carta1Data!: Carta1[];
  data!: Object;
  loading!: boolean;
  o!: Observable<Object>;
  oCarta1!: Observable<Carta1[]>;
  constructor(public http: HttpClient) { }

   ngOnInit(): void {
    this.makeTypedRequest();  
  }
   
  makeTypedRequest() : void
  {
    this.oCarta1 = this.http.get<Carta1[]>('https://pokeapi.co/api/v2/pokemon/ditto');
    this.oCarta1.subscribe(data => {this.carta1Data = data;});
  }
 
   getData = (d: PokemonData) => {
    this.data = d;
    this.loading = false;
  }


}
