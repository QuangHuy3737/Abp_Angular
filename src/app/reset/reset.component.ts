import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  @Input('inSize') inSize : number;
  @Output('OutSize') outSize = new EventEmitter<number>();
  @Input('inColor') inColor : string;
  @Output('OutColor') outColor = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  reset(){
    console.log(this.inSize);
    this.inSize= 16;
    console.log(this.inSize);
    this.outSize.emit(this.inSize);
    this.inColor='red';
    this.outColor.emit(this.inColor);


  }

}
