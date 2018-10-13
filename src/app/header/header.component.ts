import { Component, OnInit,ElementRef} from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AppService} from '../app.service';
import { Observable } from 'rxjs/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public isFormview:boolean = false;
	public isSearchinfo:boolean = false;
	public isLogin:boolean;
	public isRegister:boolean = false;
	public list:any = [];
	public listshow:any = [];
	public searchKeyList:any = [];
	public searchKeyShowList:any = [];
	public page:number = 0;
	// public searchKeyNumber:number = 0;
	public totalpage:number;
	public rotateang:number = 0;


	constructor(
		private http:HttpClient,
		public appservice :AppService,
		public el:ElementRef
		) { 
		appservice.isLoginEventer
			.subscribe(isLoginfromLogin => {
				
				appservice.defaultIsLogin = isLoginfromLogin
			});
	}
	ngOnInit() {
		this.isLogin = this.appservice.defaultIsLogin;
 	}

	ngOnChanges(){
		
	}

	formViewToggle(e,s,w,r,bgc) {

		const DomIput = e.target;
		const DomSearchinfo = e.target.nextElementSibling;
		const DomI = e.target.previousElementSibling;

		this.isFormview = s;
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

		if(localStorage.getItem('searchKey')!=null) {
			this.searchKeyList = localStorage.getItem('searchKey').split(',');
		}
	}  

	searchinfoToggle(s) {
		this.isSearchinfo=s;
		// console.log(this.isFormview,this.isSearchinfo);
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

	logoutfn() {
		this.isLogin = false;
	}

	searchkey() {
		const searchInpDom = this.el.nativeElement.querySelector('#search_inp');
		if(localStorage.getItem('searchKey')==null) {
			if(searchInpDom.value!=''){
				if(this.searchKeyList.length>4){
					this.searchKeyList = this.searchKeyList.slice(1, 5);
				}
				this.searchKeyList = [...this.searchKeyList,searchInpDom.value];
				localStorage.setItem('searchKey',this.searchKeyList);
			}
		}else {
			if(searchInpDom.value!=''){
				this.searchKeyList = localStorage.getItem('searchKey').split(',');
				if(this.searchKeyList.length>4){
					this.searchKeyList = this.searchKeyList.slice(1, 5);
				}
				this.searchKeyList = [...this.searchKeyList,searchInpDom.value];
				localStorage.setItem('searchKey',this.searchKeyList);
			}else {
				this.searchKeyList = localStorage.getItem('searchKey').split(',');
			}
		}

	}

	deletesearchkey(e){
		const a = e.target.previousElementSibling.children[1].innerText
		const searchKeyListindex = this.searchKeyList.indexOf(a.trim());
		this.searchKeyList.splice(searchKeyListindex,1);
		if(this.searchKeyList.length!=[]){
			localStorage.setItem('searchKey',this.searchKeyList);
		}else{
			localStorage.removeItem('searchKey');
		}
		console.log(this.searchKeyList);
		console.log(localStorage.getItem('searchKey'));
	}
}
