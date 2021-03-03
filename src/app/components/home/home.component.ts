import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public error : number = 0;
  constructor(private _router : Router) { }

  ngOnInit(): void {
    
  }
  onAccess(key){
    if(key=='123456'){
      
      localStorage.removeItem('key');
      localStorage.clear();
      localStorage.setItem('key' ,key);
      this._router.navigate(['/login']);

    }
    else{
      this.error = -1;
    }
  }

}
