import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildComponent} from './children/child.component';
import {GrandChildComponent} from './children/grand-child.component';
import {HostClassChildComponent} from './host-class/host-class-child.component';
import {HostClassParentComponent} from './host-class/host-class-parent.component';
import {HooksParentComponent} from './hooks/hooks-parent.component';
import {HooksChildComponent} from './hooks/hooks-child.component';
import {HooksGrandChildComponent} from './hooks/hooks-grand-child.component';
import {HooksChildTwoComponent} from './hooks/hooks-child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    HostClassChildComponent,
    HostClassParentComponent,
    HooksParentComponent,
    HooksChildComponent,
    HooksGrandChildComponent,
    HooksChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
