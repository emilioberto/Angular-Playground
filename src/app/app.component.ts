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
    console.log(this.title.isNullOrEmpty())
    console.log(emptyIfNull(this.students).map(x => 'franco'));
  }
}
