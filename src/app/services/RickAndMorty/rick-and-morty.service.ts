import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RickAndMorty, RickAndMortyAdapter } from 'src/app/models/RickAndMorty';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  // private URL = '/api/v1/character';
  private URL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAll = (page: number = 2) => {
    return this.http.get<RickAndMortyAdapter>(`${this.URL}/?page=${page}`);
  };

  getByName = () => {};

  create = (data: RickAndMorty) => {
    let arr: RickAndMorty[] = [];
    const items = window.localStorage.getItem('dataRickAndMorty');

    if (items) {
      const parsed = JSON.parse(items);
      arr = [...parsed];
    }

    window.localStorage.setItem(
      'dataRickAndMorty',
      JSON.stringify([...arr, data])
    );
  };

  update = () => {};

  delete = () => {};
}
