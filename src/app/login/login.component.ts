import { Component, OnInit,ElementRef,ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';

import { AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public isLogin:boolean = false;

  constructor(
  	public router: Router,
    public appservice :AppService,
    public el :ElementRef,
  	public http : HttpClient
  ) { }

  ngOnInit() {
  }

   doRegister(): void {
    this.router.navigateByUrl("register") 
  }


  doHome() {
  	this.appservice.doHomefn();
  }

  isLoginfn() {
    // const accountInputDom = this.el.nativeElement.querySelector('.lgaccount');
    // const passwordInputDom = this.el.nativeElement.querySelector('.lgpassword');
    // console.log(accountInputDom.value,passwordInputDom.value);
    this.isLogin = true;
    this.appservice.isLoginEventer.emit(this.isLogin);
    this.router.navigateByUrl("home") 
  }
}
