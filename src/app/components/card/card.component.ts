import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RickAndMorty } from 'src/app/models/RickAndMorty';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: RickAndMorty = {
    name: '',
    gender: 'unknown',
    image: '',
    species: '',
    status: 'unknown',
  };
  @Output() onClick = new EventEmitter<RickAndMorty>();

  handleClick = () => {
    this.onClick.emit(this.card);
  };
}
