import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public error  : number = 0;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem('user')){
      this.router.navigate(['']);
    }

  }
  onLogin(username : string , password : string){
    let user = {
      username : username,
      password : password
    };
    if(username == 'admin' && password=='admin'){
      localStorage.setItem('user' ,JSON.stringify(user));
      this.router.navigate(['/product']);
    }
    else{
      this.error= -1;
    }
  
  }

}
