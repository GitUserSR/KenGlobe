import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userName = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onSignIn(){
  	console.log("Signed In");
  	this.userName = '';
 	this.password = '';
  }

  isEmpty(input) {
  	console.log(input);
	return (!input || 0 === input.length);
  }

}
