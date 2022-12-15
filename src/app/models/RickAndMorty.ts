export interface RickAndMortyAdapter {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: RickAndMorty[];
}

export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface RickAndMorty {
  id?: number;
  name: string;
  status: Status;
  species: string;
  gender: Gender;
  image: string;
}

export const STATUS: Status[] = ['Alive', 'Dead', 'unknown'];
export const GENDERS: Gender[] = ['Female', 'Genderless', 'Male', 'unknown'];
