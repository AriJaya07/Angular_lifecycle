import { Component, ViewChild } from '@angular/core';

import { Hero } from '../hero';
import { OnChangesComponent } from '../on-changes/on-changes.component';

@Component({
  selector: 'app-on-change-parent',
  templateUrl: './on-change-parent.component.html',
  styles: ['']
})
export class OnChangeParentComponent {
  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstrom');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
