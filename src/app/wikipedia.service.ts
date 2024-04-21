import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  public search(term: string) {
    return `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&format=json`;
  }
}
