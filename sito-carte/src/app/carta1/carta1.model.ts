export interface Carta1 {
    id: string;             // ID univoco della carta
    name: string;           // Nome della carta (es. Pikachu)
    set: {                  // Informazioni sul set della carta
      name: string;         // Nome del set (es. Base Set)
    };
    images: {               // URL delle immagini della carta
      small: string;        // Immagine piccola (ad esempio per la lista)
      large: string;        // Immagine grande (per dettagli)
    };
    types: string[];        // Tipi della carta (es. ["Electric"] per Pikachu)
  }