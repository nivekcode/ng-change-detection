import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'grand-child',
  template: `
    <h2>I am the grand child</h2>
    {{logChangeDetection()}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent implements OnInit {

  @Input() someStream: Observable<any>;
  @HostBinding('class') background;

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.someStream.subscribe(e => {
      console.log('Change background to blue');
      this.background = 'blue';
      this.cdr.markForCheck();
    });
  }

  logChangeDetection(): void {
    console.log('Change detection ran on the grand child');
  }
}
