import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public isFormview:boolean = false;
	public isSearchinfo:boolean = false;
	public list:any = [];
	public listshow:any = [];
	public page:number = 0;
	public totalpage:number;
	public rotateang:number = 0;


	constructor(private http:HttpClient) { 
	}

	ngOnInit() {
 	}

	formViewToggle(e,s,w,r,bgc) {

		if(s==='table') {
			this.isFormview = true;
		}else if (s==='none'){
			this.isFormview = false;
		}
		const DomIput = e.target;
		const DomSearchinfo = e.target.nextElementSibling;
		const DomI = e.target.previousElementSibling;
		if(this.isFormview||this.isSearchinfo) {
			DomSearchinfo.style.display = 'table';
		}else {
			DomSearchinfo.style.display = 'none';
		}
		DomIput.style.width = w;
		DomI.style.right = r;
		DomI.style.backgroundColor = bgc;

		if (this.list.length===0) {
			this.http.get("/src/assets/headinputsearchlist.json")
				.subscribe((res:any)=> {
					// console.log(res);
					this.list = res.data;
					this.listshow = this.list.slice(0,8);
				})
		}
	}  

	searchinfoToggle(e,s) {

		if(s==='table') {
			this.isSearchinfo = true;
		}else if (s==='none'){
			this.isSearchinfo = false;
		}
		const DomSearchinfo = e.target;
		if(this.isFormview||this.isSearchinfo) {
			DomSearchinfo.style.display = 'table';
		}else {
			DomSearchinfo.style.display = 'none';
		}
	}

	refreshitmefn(e) {
		this.totalpage = Math.ceil(this.list.length/8);
		this.page++;
		if(this.page >= this.totalpage) {
			this.page =0;
		}
		this.listshow = this.list.slice(this.page*8,this.page*8+8);


		if(e.target.firstElementChild) {
			e.target.firstElementChild.style.transform='rotate(' + (360+this.rotateang) + 'deg)';
		}else {
			e.target.style.transform= 'rotate(' + (360+this.rotateang) + 'deg)';
		}
		this.rotateang = this.rotateang + 360;
	}
}
