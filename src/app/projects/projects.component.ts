import { Component, Input, OnInit } from '@angular/core';
import { MyApp } from '../myApp';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public myApp: MyApp[] = [];

  ngOnInit(): void {
    this.myApp = [
      {
        appName: 'Kalkulator napiwków',
        appImg: './assets/projects-img/billsplitter.png',

        appAlt: 'zdjęcie aplikacj do przeliczania napiwków',
        appHref: 'https://piotrliszka1.github.io/tip-calculator-app-main/',
      },
      {
        appName: 'Lista zadań',
        appImg: './assets/projects-img/todoList.png',

        appAlt: 'na obrazku aplikacja do  listy zadań ',
        appHref: 'https://piotrliszka1.github.io/NgTodoApp/',
      },
      {
        appName: 'Konwerter stopni',
        appImg: './assets/projects-img/konwerter.png',

        appAlt: 'zdjęcie aplikacji konwerter stopni',
        appHref: 'https://piotrliszka1.github.io/konwerterStopni.io/',
      },
    ];
  }
}
