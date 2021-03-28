import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
      cards = [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 },
        { title: 'Card 8', cols: 1, rows: 1 }
      ];
      colsNumber: number = 4;
      constructor(breakpointObserver: BreakpointObserver) {

      breakpointObserver.observe([
          Breakpoints.Handset
        ]).subscribe(result => {
          if (result.matches) {
            this.colsNumber = 2;
          }
        });
      breakpointObserver.observe([
          Breakpoints.XSmall
        ]).subscribe(result => {
          if (result.matches) {
            this.colsNumber = 1;
          }
        });
      breakpointObserver.observe([
          Breakpoints.Medium
        ]).subscribe(result => {
          if (result.matches) {
            this.colsNumber = 3;
          }
        });
      breakpointObserver.observe([
          Breakpoints.Web
        ]).subscribe(result => {
          if (result.matches) {
            this.colsNumber = 4;
          }
        });

  }

  
}
