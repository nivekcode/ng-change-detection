import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, interval, Observable, ReplaySubject, Subject} from 'rxjs';
import {delay, map, skip, switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'host-class-parent',
  template: `
    <h1>I am the parent</h1>
    <host-class-child *ngIf="test$ | async" [someStream]="someStream$"></host-class-child>
    <button (click)="changeBackground('red')">To red</button>
    <button (click)="changeBackground('blue')">To blue</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostClassParentComponent implements OnInit {

  someStream$ = new ReplaySubject();
  test$: Observable<any>;

  ngOnInit(): void {
    this.test$ = interval(1000).pipe(
      skip(1),
      map(e => e % 2 === 0 ? 'blue' : 'red'),
      take(1)
    );
    this.test$.subscribe(background => this.someStream$.next(background));
  }

  changeBackground(background) {
    console.log('Streaming', background);
    this.someStream$.next(background);
  }

}
