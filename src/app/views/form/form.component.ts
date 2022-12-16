import { Component, OnInit } from '@angular/core';
import { RickAndMorty } from 'src/app/models/RickAndMorty';

const INITIAL_STATE: RickAndMorty = {
  name: '',
  gender: 'unknown',
  image: '',
  species: '',
  status: 'unknown',
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  data: RickAndMorty = INITIAL_STATE;
  items: RickAndMorty[] = [];

  ngOnInit() {
    const items = window.localStorage.getItem('dataRickAndMorty');
    if (items) {
      const parsed: RickAndMorty[] = JSON.parse(items);
      this.items = parsed;
    }
  }

  handleClick = (selected: RickAndMorty) => {
    this.data = selected;
  };

  handleClear = () => {
    this.data = INITIAL_STATE;
  };

  handleSave = (data: RickAndMorty) => {
    this.items = [...this.items, data];
    this.data = INITIAL_STATE;
  };
}
