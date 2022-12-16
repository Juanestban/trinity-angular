import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RickAndMorty, STATUS, GENDERS } from 'src/app/models/RickAndMorty';
import { RickAndMortyService } from 'src/app/services/RickAndMorty/rick-and-morty.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Input() data: RickAndMorty = {
    name: '',
    gender: 'unknown',
    image: '',
    species: '',
    status: 'unknown',
  };
  @Output() onSave = new EventEmitter<RickAndMorty>();
  statusOptions = STATUS;
  gendersOptions = GENDERS;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  handleClick = () => {
    console.log(this.data);
    this.rickAndMortyService.create(this.data);
    this.onSave.emit(this.data);
  };
}
