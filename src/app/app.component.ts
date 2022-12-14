import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  handleClick = () => {
    this.title = this.title === 'my-app' ? 'my-test' : 'my-app';
  };
}
