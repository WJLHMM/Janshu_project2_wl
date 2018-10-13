import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

import { AppService } from '../../../app.service';
@Component({
  selector: 'app-home-contentlist',
  templateUrl: './home-contentlist.component.html',
  styleUrls: ['./home-contentlist.component.scss'],

})
export class HomeContentlistComponent implements OnInit {

	public morecontentlist:any = [];
	public morecontentlistpage:number = 0;

	@Input() contentlist;
	
	constructor(
		private http:HttpClient,
		public appservice:AppService,
		public router: Router

	) { }

	ngOnInit() {
	}

	showmorecontent(p) {
		this.morecontentlistpage++;
		this.http.get('/src/assets/homelist1.json?page=' + p)
			.subscribe((res:any)=> {
				this.morecontentlist = res.data.contentlist;
				this.contentlist = this.contentlist.concat(this.morecontentlist);
			})

	}

	doContentlist(id) {
		this.appservice.doContentlistfn(id);
	}

}
