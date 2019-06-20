import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'host-class-child',
  template: `
    <h1>I am the host child</h1>
    {{ background }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostClassChildComponent implements OnInit {

  @HostBinding('class') background: string;
  @Input() someStream: Observable<any>;

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.someStream.subscribe(background => {
      console.log('Background', background);
      this.background = background;
      this.cdr.markForCheck();
    });
  }
}
