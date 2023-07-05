import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  public ngImg: string = '../../assets/angular.svg';
  public htmlIcon: string = '../../assets/html-icon.svg';
  public jsIcon: string = '../../assets/js-icon.svg';
  public scssIcon: string = '../../assets/scss-icon.svg';
  public cssIcon: string = '../../assets/css-icon.svg';
  public typeScriptIcon: string = '../../assets/typescript.svg';

  public images = [
    this.htmlIcon,
    this.cssIcon,
    this.scssIcon,
    this.jsIcon,
    this.ngImg,
    this.typeScriptIcon,
  ];
}
