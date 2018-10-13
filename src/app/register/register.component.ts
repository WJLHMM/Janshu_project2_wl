import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
// import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

   doLogin(): void {
    this.router.navigateByUrl("login") 
  }
}
