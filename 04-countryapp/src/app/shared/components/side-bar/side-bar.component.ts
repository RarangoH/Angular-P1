import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',

  styles: `
    :host {
      display: block;
    }
  `
})
export class SideBarComponent { }
