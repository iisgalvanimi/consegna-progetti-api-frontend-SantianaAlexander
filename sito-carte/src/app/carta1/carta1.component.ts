import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component {
  
  data!: Object;
   loading!: boolean;
   o! :Observable<any>;
   constructor(public http: HttpClient) {}
   
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto');
     this.o.subscribe(this.getData);
   }
   getData = (d : any) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }


}
