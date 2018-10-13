import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router} from '@angular/router';
// 注意下面的坑，直接从rxjs中用用即可不要rxjs/Subject
import { observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  public defaultIsLogin:boolean=false;
  isLoginEventer:EventEmitter<boolean> = new EventEmitter();

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() { 
  }

  doHomefn(): void {
    this.router.navigateByUrl("home") 
  }

  doRecommendlistfn(id):void {
    this.router.navigateByUrl("recommendlist?id=" + id); 
  }  

  doContentlistfn(id):void {
    this.router.navigateByUrl("contentlist?id=" + id); 
  }

  doRecommendauthorsfn(id):void {
    this.router.navigateByUrl("recommendauthors?id=" + id); 
  }

  doBannerfn(id):void {
    this.router.navigateByUrl("banner?id=" + id); 
  }

  doBorderfn(id):void {
    	this.router.navigateByUrl("board?id=" + id); 
    }



}
