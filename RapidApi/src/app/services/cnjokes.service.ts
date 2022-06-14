import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CnjokesService {

  const api = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

  constructor() {}

  getJokes(): Observable<joke> {
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '2380a6b96bmshe73b6501b57c207p15d141jsnd3edf7c68147'
      )
      .set(
        'X-RapidAPI-Host',
        'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
      );
    return this.http.api<joke>(api, { headers });
  }
}
