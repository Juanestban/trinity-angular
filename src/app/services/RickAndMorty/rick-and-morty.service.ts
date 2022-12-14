import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RickAndMortyAdapter } from 'src/app/models/RickAndMorty';

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

  create = () => {};

  update = () => {};

  delete = () => {};
}
