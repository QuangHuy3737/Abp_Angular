import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  public colors :string[] = [];
  @Output('outColor') colorConnector = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
    this.colors = ['red', 'green', 'blue', 'gray', 
    '#ccc','purple', 'orange', '#e8ecf2', 
    '#aac0e0', '#537c3d', '#d32a3b', '#5d699b',
     '#2b3c84', '#a6abc1'];
  }
  outColor(color){
    this.colorConnector.emit(color);
    console.log(color+ "hh");
  }

}
