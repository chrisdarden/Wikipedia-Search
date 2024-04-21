import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

// start observable demo code unrelated to wikipedia search

// import { Observable } from 'rxjs';


// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make: {
//     name: string;
//     dateCreated: number;
//   };
// }



// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'Toyota',
//       dateCreated: 1999
//     }

//   });

// }).pipe(
//   map(car => {
//     if (car.make.name) {
//       return (car.make.name);
//     } else {;
//       return "Car not found";
//     }

//   })
// );

// observable.subscribe(value => {
//   console.log(value); // 1
// });

// end observable demo code unrelated to wikipedia search



@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) {}

  public search(term: string) {
    return this.http.get<WikipediaResponse>("https://en.wikipedia.org/w/api.php", {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }
    ).pipe(
      map((response) => {
        return response.query.search;
      })
    );
  }
}
