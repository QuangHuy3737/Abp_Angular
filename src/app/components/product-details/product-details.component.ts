import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute} from '@angular/router';
import { ProductServieService } from 'src/app/services/product-servie.service';
import { product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pro : product = {
    id : null,
    name: null,
    quantity: null,
   
  };
  id : any;
  constructor(private activeRoute : ActivatedRoute,
             private service : ProductServieService
    ) { }
  ngOnInit(): void {
      this.pro.id = (+this.activeRoute.snapshot.params['id']);
      this.getProductById();
  }
  
  getProductById(){
    this.service.getProductById(this.pro.id).subscribe(data => {
      //debugger;
      console.log(data);
      Object.assign(this.pro, data['result']);
      
      console.log(this.pro);
      });
    
   

  }



}
