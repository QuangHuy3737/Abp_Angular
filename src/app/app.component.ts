import { Component } from '@angular/core';
import{ FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public colorDefault : string = 'red';
  public fontSizeDefault  : number = 16 ;
  getColor(event){
    this.colorDefault=event;
  }
  getOutSize(event){
    this.fontSizeDefault=event;
  }
  getResize(event){
    this.fontSizeDefault=event;
  }
  getReColor(event){
    this.colorDefault=event;
  }

}
