import { Component, OnInit } from '@angular/core';

let isFormviewshow:boolean = false;
let isSearchinfoshow:boolean = false;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    navmfn(){
    	console.log('hello');
    }

	constructor() { }

	ngOnInit() {
	}

  // formViewToggle(e,s,w,r,bgc) {
  // 	const DomIput = e.target;
  // 	const DomSearchinfo = e.target.nextElementSibling;
  // 	const DomI = e.target.previousElementSibling;
  // 	// if(s==='none') {
  // 	// 	console.log(DomSearchinfo.addEvenListener('mouseenter',this.searchinfoToggle) );
  // 	// }
  // 	// DomSearchinfo.style.display = s;
  // 	DomIput.style.width = w;
  // 	DomI.style.right = r;
  // 	DomI.style.backgroundColor = bgc;
  // }  
  // searchinfoToggle(e,s) {
  // 	const DomSearchinfo = e.target;
  // 	DomSearchinfo.style.display = s;
  // }

 	formViewShow(e) {
		const DomIput = e.target;
	  	const DomSearchinfo = e.target.nextElementSibling;
	  	const DomI = e.target.previousElementSibling;
	  	isFormviewshow = true;
	  	if(isFormviewshow||isSearchinfoshow) {
	  		DomSearchinfo.style.display = 'table';
	  	}
	  	DomIput.style.width = '240px';
	  	DomI.style.right = '-74px';
	  	DomI.style.background = '#333';
	  	console.log(isFormviewshow,isSearchinfoshow);
 	}
	formViewHide (e){
		const DomIput = e.target;
		const DomSearchinfo = e.target.nextElementSibling;
		const DomI = e.target.previousElementSibling;
		isFormviewshow = false;
		if(!isFormviewshow&&!isSearchinfoshow) {
			DomSearchinfo.style.display = 'none';
		}
		DomIput.style.width = '160px';
		DomI.style.right = '6px';
		DomI.style.backgroundColor= '#eee';
		console.log(isFormviewshow,isSearchinfoshow);
  	} 

	searchinfoShow(e) {
		const DomSearchinfo = e.target;
		isSearchinfoshow = true;
		DomSearchinfo.style.display = 'table';
		console.log(isFormviewshow,isSearchinfoshow);
		console.log(e);
	}
	searchinfoHide(e) {
		const DomSearchinfo = e.target;
		isSearchinfoshow = false;
		DomSearchinfo.style.display = 'none';
		console.log(isFormviewshow,isSearchinfoshow);
	}
}
