import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  showIcon: boolean = false;

  hide() {
    this.showIcon = false;
  }

  show() {
    this.showIcon = true;
  }
}
