import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeekABooDirective } from './peek-a-boo/peek-a-boo.directive';
import { SpyDirective } from './spy/spy.directive';
import { SpyComponent } from './spy/spy.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { ChildComponent } from './child/child.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter/counter.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooDirective,
    SpyDirective,
    SpyComponent,
    OnChangesComponent,
    ChildViewComponent,
    AfterViewComponent,
    AfterContentComponent,
    ChildComponent,
    DoCheckComponent,
    AfterContentParentComponent,
    AfterViewParentComponent,
    CounterParentComponent,
    CounterComponent,
    DoCheckParentComponent,
    OnChangeParentComponent,
    PeekABooParentComponent,
    PeekABooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
