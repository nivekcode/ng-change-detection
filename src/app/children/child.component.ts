import {ChangeDetectionStrategy, Component} from '@angular/core';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'child',
  template: `
    <h1>I am the child</h1>
    {{logChangeDetection()}}
    <grand-child [someStream]="someStream"></grand-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  someStream;

  ngOnInit(): void {
    this.someStream = of(1).pipe(delay(2000));
  }

  logChangeDetection(): void {
    console.log('Change detection ran on the child');
  }
}
