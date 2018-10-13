import { Component, OnInit,ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router} from '@angular/router';

import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {
  	public bannerimglist:any;
  	public Bannerrolling:any = null;
  	public i:number = 1;
  	public totalimg:number = 6;

	constructor(
  		private http:HttpClient,
  		private el:ElementRef,
  		public appservice:AppService
  	) { }

  	ngOnInit() {
  		if(!this.bannerimglist) {
	  		this.http.get('/src/assets/Bannerpics.json')
		  		.subscribe((res:any)=> {
					this.bannerimglist = res.data.bannerpiclist;
				});
  		}
    	this.rollingfn();
  	}

	rollingfn () {
		const ulDom = this.el.nativeElement.querySelector('.bannerwrapper');
		const ul2Dom = this.el.nativeElement.querySelector('.bannershowtip').children;
		let ul2Domlength:number = ul2Dom.length;
		if(!this.Bannerrolling) {
			this.Bannerrolling = setInterval(()=> {
				for(let k= 0; k<ul2Domlength; k++) {
					ul2Dom[k].style.backgroundColor = "#969696";
				}
			   	this.i++;
				if(this.i>this.totalimg) {
					this.i = 1;
					ul2Dom[this.i-1].style.backgroundColor = "red";
					ulDom.style.transition = ''
					ulDom.style.transform ='translateX(' + -(this.i/8)*100+'%)'; 

				}else {
					ul2Dom[this.i-1].style.backgroundColor = "red";
					ulDom.style.transform ='translateX(' + -(this.i/8)*100+'%)'; 
					ulDom.style.transition = '0.3s all ';
				}
			},5000)
		}else {
			this.Bannerrolling = null;
			this.Bannerrolling = setInterval(()=> {
				for(let k= 0; k<ul2Domlength; k++) {
					ul2Dom[k].style.backgroundColor = "#969696";
				}
			   	this.i++;
				if(this.i>this.totalimg) {
					this.i = 1;
					ul2Dom[this.i-1].style.backgroundColor = "red";
					ulDom.style.transition = ''
					ulDom.style.transform ='translateX(' + -(this.i/8)*100+'%)'; 

				}else {
					ul2Dom[this.i-1].style.backgroundColor = "red";
					ulDom.style.transform ='translateX(' + -(this.i/8)*100+'%)'; 
					ulDom.style.transition = '0.3s all ';
				}
			},5000)
		}
	}

	ngOnDestroy() {
    	clearInterval(this.Bannerrolling);
    }

    // ngAfterViewInit() {
    // }

    bannercontrollertoggle(s) {

    	if(s==='block') {
    		clearInterval(this.Bannerrolling);
    	}else if(s==='none'){
		this.rollingfn();
    	}
    	const plDom = this.el.nativeElement.querySelector('.bannercontrollerl');
    	const prDom = this.el.nativeElement.querySelector('.bannercontrollerr');
    	plDom.style.display = s;
    	prDom.style.display = s;

    }

    bannerslidel() {
    	const plDom:any = this.el.nativeElement.querySelector('.bannercontrollerl');
    	const ulDom:any = this.el.nativeElement.querySelector('.bannerwrapper');
    	let index:number = ulDom.style.transform.split('-')[1].split('%')[0]/12.5;
    	const ul2Dom = this.el.nativeElement.querySelector('.bannershowtip').children;
		let ul2Domlength:number = ul2Dom.length;

		for(let k= 0; k<ul2Domlength; k++) {
			ul2Dom[k].style.backgroundColor = "#969696";
		}

    	if(index==6) {
    		index=0;
    		ulDom.style.transition = '';
    		ulDom.style.transform ='translateX(' + -((index+1)/8)*100+'%)';
    		ul2Dom[index].style.backgroundColor = "red"; 
    	}else{
	    	ulDom.style.transform ='translateX(' + -((index+1)/8)*100+'%)'; 
	    	ulDom.style.transition = '0.3s all';
	    	ul2Dom[index].style.backgroundColor = "red"; 
	    	index++;
    	}
    } 
    bannerslider() {
    	const plDom:any = this.el.nativeElement.querySelector('.bannercontrollerr');
    	const ulDom:any = this.el.nativeElement.querySelector('.bannerwrapper');
    	let index:number = ulDom.style.transform.split('-')[1].split('%')[0]/12.5;
    	const ul2Dom = this.el.nativeElement.querySelector('.bannershowtip').children;
		let ul2Domlength:number = ul2Dom.length;

		for(let k= 0; k<ul2Domlength; k++) {
			ul2Dom[k].style.backgroundColor = "#969696";
		}

    	if(index==1) {
    		index=7;
    		ulDom.style.transition = '';
    		ulDom.style.transform ='translateX(' + -((index-1)/8)*100+'%)'; 
    		ul2Dom[index-2].style.backgroundColor = "red"; 
    	}else {
	    	ulDom.style.transform ='translateX(' + -((index-1)/8)*100+'%)'; 
	    	ulDom.style.transition = '0.3s all';
	    	ul2Dom[index-2].style.backgroundColor = "red"; 
	    	index--;
    	}
    }

    doBanner(id) {
		this.appservice.doBannerfn(id);
	}

}