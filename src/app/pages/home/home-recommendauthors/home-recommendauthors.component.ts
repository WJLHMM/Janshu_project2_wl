import { Component, OnInit,Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home-recommendauthors',
  templateUrl: './home-recommendauthors.component.html',
  styleUrls: ['./home-recommendauthors.component.scss']
})
export class HomeRecommendauthorsComponent implements OnInit {
	
	public isFadepic:Boolean = false;
	public morerecommendauthorslist:any = null;
	public listpage:number = 0;
	public listlength:number;
	public rotateang:number = 0;

	@Input() recommendauthorslist;
	
	constructor(
		private http:HttpClient,
		public appservice:AppService
	) { }

	ngOnInit() {
	}

	fadepictoggle(s) {
		this.isFadepic = s;
	}

	refreshitme(e,p) {

		this.http.get('/src/assets/recommendauthorslist.json?page=' + p)
			.subscribe((res:any)=> {
				this.morerecommendauthorslist = res.data.recommendauthorslist;
				this.listlength = this.morerecommendauthorslist.length;
				this.listpage++;
				if (this.listpage*5>=this.listlength){
					this.listpage = 0;
				}
				this.recommendauthorslist = this.morerecommendauthorslist.slice(this.listpage*5,this.listpage*5+5);
			})
		if(e.target.firstElementChild) {
			e.target.firstElementChild.style.transform='rotate(' + (360+this.rotateang) + 'deg)';
		}else {
			e.target.style.transform= 'rotate(' + (360+this.rotateang) + 'deg)';
		}
		this.rotateang = this.rotateang + 360;
	}

	doRecommendauthors(id) {
		this.appservice.doRecommendauthorsfn(id);
	}
}
