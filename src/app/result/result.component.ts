import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input('size') size : number;
  @Input('color') color : string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.size, this.color);
  }
  content : string ='Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.'
  setStyle(){
    return{
      'color' : this.color, 
      'font-size' : this.size + 'px'
    };

  }  

}
