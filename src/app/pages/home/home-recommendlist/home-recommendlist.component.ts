import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

import { AppService} from '../../../app.service';

@Component({
  selector: 'app-home-recommendlist',
  templateUrl: './home-recommendlist.component.html',
  styleUrls: ['./home-recommendlist.component.scss']
})
export class HomeRecommendlistComponent implements OnInit {
 
	@Input() topiclist;
	constructor(public router: Router, public appservice :AppService,) { }

	ngOnInit() {
	}

	doRecommendlist(id): void {
		this.appservice.doRecommendlistfn(id);
	 }

}
