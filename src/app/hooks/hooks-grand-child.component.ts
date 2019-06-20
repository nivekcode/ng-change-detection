import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'hooks-grand-child',
  template: `
    <h2>Child</h2>
  `
})
export class HooksGrandChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  private name = 'GrandChildComponent';

  ngAfterContentChecked(): void {
    console.log(`${this.name}: afterContentChecked`);
  }

  ngAfterContentInit(): void {
    console.log(`${this.name}: afterContentInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.name}: afterViewChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.name}: afterViewInit`);
  }

  ngDoCheck(): void {
    console.log(`${this.name}: doCheck`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.name}: onChanges`);
  }

  ngOnDestroy(): void {
    console.log(`${this.name}: onDestroy`);
  }

  ngOnInit(): void {
    console.log(`${this.name}: onInit`);
  }

}
