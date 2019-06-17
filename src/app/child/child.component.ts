import {AfterContentInit, ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {interval, Observable, of} from 'rxjs';
import {delay, take} from 'rxjs/operators';

@Component({
  selector: 'child',
  template: `
    <h1>I am the child</h1>
    <button (click)="makeMeBlue()">Make me blue</button>
    {{test}}
    {{logChangeDetection()}}
    {{ someStream | async }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, AfterContentInit {

  @Input() someStream: Observable<any>;
  @HostBinding('class') background: string;

  ngOnInit(): void {
    // const anotherStream = this.someStream;
    /*
    const anotherStream = of(1);
    anotherStream.subscribe(() => {
      this.background = 'blue';
    });
    */
  }

  ngAfterContentInit(): void {
    const anotherStream = interval(1000).pipe(take(3));
    anotherStream.subscribe(e => {
      if(e === 1) {
        console.log('Changing to blue');
        this.background = 'blue';
      }
      if (e === 2) {
        console.log('Changing to red');
        this.background = 'red';
      }
      console.log('Ticking');
    });
  }

  test = 'hallo';

  makeMeBlue(): void {
    this.test = 'test';
    // this.background = 'blue';
  }

  logChangeDetection(): void {
    console.log('Change detection ran');
  }
}
