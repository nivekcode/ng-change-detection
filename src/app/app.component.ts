import {Component} from '@angular/core';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  someStream$ = interval(1000).pipe(take(5));
  initText = 'this is some text ';
  someText: string;
  counter = 0;

  updateSomeText(): void {
    this.counter++;
    this.someText = this.initText + this.counter;
  }
}
