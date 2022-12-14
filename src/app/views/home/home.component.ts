import { Component, OnInit } from '@angular/core';

import { RickAndMortyService } from 'src/app/services/RickAndMorty/rick-and-morty.service';
import { RickAndMorty } from 'src/app/models/RickAndMorty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: RickAndMorty[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getAll().subscribe((res) => {
      this.cards = res.results;
    });
  }
}
