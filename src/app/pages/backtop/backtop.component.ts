import { Component, OnInit,ElementRef,HostListener } from '@angular/core';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styleUrls: ['./backtop.component.scss']
})
export class BacktopComponent implements OnInit {

  public isBacktop:boolean = false;
  public isBacktoptext:boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
   	const topdistant= document.documentElement.scrollTop || document.body.scrollTop;
    if(topdistant>200) {
    	this.isBacktop = true;
    }else {
    	this.isBacktop = false;
    }
  }

  constructor(public el:ElementRef) { }

  ngOnInit() {
  }

  backtoptexttoggle(s) {
  	this.isBacktoptext = s;
  }

  backtopfn () {
	scrollTo(0,0);
  }
}
