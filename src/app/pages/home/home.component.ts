import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public topiclist:any =null;
  public recommendlist:any;
  public recommendauthorslist:any;
  public contentlist:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  	
  	if(!this.topiclist) {
	  	this.http.get('/src/assets/homelist.json')
	  		.subscribe((res:any)=> {
	  			this.topiclist = res.data.topicList;
	  			this.recommendlist = res.data.recommondList;
	  			this.recommendauthorslist = res.data.recommendauthorslist;
	  			this.contentlist = res.data.contentlist;
	  		})
  	}
  }

}
