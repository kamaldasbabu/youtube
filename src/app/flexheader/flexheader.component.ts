import { SharedvarService } from './../sharedvar.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-flexheader',
  templateUrl: './flexheader.component.html',
  styleUrls: ['./flexheader.component.css']
})
export class FlexheaderComponent implements OnInit {

    
    favoriteColorControl = new FormControl('');
    toggle: boolean = true;
    constructor(private service: SharedvarService) { }
    openSideNav(){
      if(this.toggle == false) {
        this.service.setValue(true);
      } else {
        this.service.setValue(false);
      }
      
    }

      ngOnInit(): void {
        this.service.getValue().subscribe((value)=> {
          this.toggle = value;  
          console.log(this.toggle);
 
      });
    }
  }
  



