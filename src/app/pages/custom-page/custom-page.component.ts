import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Gerardo Gamboa');
  upperCase = signal(true);

  toggleCase() {
    this.upperCase.update((prevValue) => !prevValue);
  }

  heroes = signal(heroes);
}
