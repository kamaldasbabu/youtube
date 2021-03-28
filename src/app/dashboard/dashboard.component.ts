import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   mycards = [
          { title: 'Video 1', cols: 1, rows: 1 },
          { title: 'Video 2', cols: 1, rows: 1 },
          { title: 'Video 3', cols: 1, rows: 1 },
          { title: 'Video 4', cols: 1, rows: 1 },
          { title: 'Video 1', cols: 1, rows: 1 },
          { title: 'Video 2', cols: 1, rows: 1 },
          { title: 'Video 3', cols: 1, rows: 1 },
          { title: 'Video 4', cols: 1, rows: 1 },
          { title: 'Video 1', cols: 1, rows: 1 },
          { title: 'Video 2', cols: 1, rows: 1 },
          { title: 'Video 3', cols: 1, rows: 1 },
          { title: 'Video 4', cols: 1, rows: 1 },
          { title: 'Video 1', cols: 1, rows: 1 },
          { title: 'Video 2', cols: 1, rows: 1 },
          { title: 'Video 3', cols: 1, rows: 1 },
          { title: 'Video 4', cols: 1, rows: 1 },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
  colsNumber: number = 3 ;
  ngOnInit(){
    this.colsNumber = window.innerWidth >=1279 ? 4 : (window.innerWidth)>=959 ? 3 :
    (window.innerWidth)>=599 ? 2 : 1 ;
  }
  onWindowChange(event: any){
    this.colsNumber =  (event.target.innerWidth) >=1279 ? 4 : (event.target.innerWidth)>=959 ? 3 :
    (event.target.innerWidth)>=599 ? 2 : 1 ;
}

}
