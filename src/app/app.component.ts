import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';
  students: string[] = ['franco', 'fango'];
  a = 100;
  b = -10;

  constructor() {
    console.log(this.title.isNullishOrEmpty())
    console.log(emptyIfNullish([]).map(x => 'franco'));
    console.log(this.a.isPositive());
    console.log(this.b.isPositive());
  }
}
