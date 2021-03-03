import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-size-setting',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.css']
})
export class SizeSettingComponent implements OnInit {
  @Output('outSize') outSize1= new EventEmitter<number>();
  @Input('size') size1 : number ;
  constructor() {
    console.log(this.size1);

   }
   deSize(){
     if(this.size1-2>= 8 ){
       
     }
     this.size1-=2;
     this.outSize1.emit(this.size1);
  }
  incSize(){
    if(this.size1+2<=36){
      
    }
    this.size1+=2;
    this.outSize1.emit(this.size1);


  }
  ngOnInit(): void {
  }

}
