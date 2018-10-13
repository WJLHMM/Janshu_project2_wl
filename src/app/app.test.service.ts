import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  public topiclist:any =null;
  public recommendlist:any;
  public recommendauthorslist:any;
  public contentlist:any;
  
  constructor(
  	private http:HttpClient,
  	private router:Router,
  ) { }

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

  doHomefn(): void {
    this.router.navigateByUrl("home") 
  }

 	public morerecommendauthorslist:any = null;
	public listpage:number = 0;
	public listlength:number;
	public rotateang:number = 0;
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
}
