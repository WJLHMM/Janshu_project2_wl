import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home-board',
  templateUrl: './home-board.component.html',
  styleUrls: ['./home-board.component.scss']
})
export class HomeBoardComponent implements OnInit {

	@Input() recommendlist;
	
	constructor(public appservice:AppService) { }

	
	ngOnInit() {
	}

	doBoder(id) {
		this.appservice.doBorderfn(id);
	}

}
