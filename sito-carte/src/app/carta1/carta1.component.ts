import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta1 } from './carta1.model';

@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component implements OnInit {
  
  carta1Data: Carta1 | null = null;  // Inizializza come null, per una sola carta
  loading: boolean = true;    // Imposta lo stato di caricamento
  error: boolean = false;    // Gestione degli errori

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getDittoCard();  // Esegui la richiesta per ottenere la carta Ditto
  }

  // Funzione per ottenere la carta Ditto (una sola)
  getDittoCard(): void {
    this.http.get<{ data: Carta1[] }>('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'name:Ditto'  // Filtro per ottenere solo la carta Ditto
      }
    }).subscribe({
      next: (response) => {
        // Se ci sono carte Ditto, assegna la prima
        if (response.data.length > 0) {
          this.carta1Data = response.data[0];  // Mostra solo la prima carta Ditto
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;   // Se si verifica un errore, mostra un messaggio di errore
      }
    });
  }
}
