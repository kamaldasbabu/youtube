import { SharedvarService } from './../sharedvar.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
     
     menu = [
        {btn:'All Video'},
        {btn:'Funny Video'},
        {btn:'kapil Sharma show'},
        {btn:'Justin Biber'},
        {btn:'Om Santi Om'},
        {btn:'Janna'},
    ];

    snav = true;
    constructor(
    private breakpointObserver: BreakpointObserver,
    private service:SharedvarService
    ) {}

  routerInfo: boolean = true;
  ngOnInit(){
    this.service.getValue().subscribe((value)=> {
      this.routerInfo = value;
      
  });
    }

}
