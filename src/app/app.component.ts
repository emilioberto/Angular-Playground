import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';
  students: string[] = ['franco', 'fango'];

  constructor() {
    console.log(this.title.isNullishOrEmpty())
    console.log(emptyIfNullish([]).map(x => 'franco'));
  }
}
