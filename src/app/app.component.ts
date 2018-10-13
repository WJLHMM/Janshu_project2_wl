import { Component } from '@angular/core';
import { Router, NavigationStart,NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public isLoginorRegister:boolean;

	constructor(public router:Router) {
	    this.router.events
		  .subscribe((event) => {
		    if (event instanceof NavigationEnd) { 
		      if(event.url=='/login'||event.url=='/register'){
				this.isLoginorRegister = false;
		      }else {
		      	this.isLoginorRegister = true;
		      }
		    }
		  });

	}
  
}
