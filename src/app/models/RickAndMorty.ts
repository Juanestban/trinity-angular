export interface RickAndMortyAdapter {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: RickAndMorty[];
}

export interface RickAndMorty {
  id?: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  image: string;
}
