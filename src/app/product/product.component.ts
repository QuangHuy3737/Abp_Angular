import { Component, OnInit } from '@angular/core';
import { ProductServieService } from '../services/product-servie.service';
import { product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {
  idFilter : string;
  nameFilter : string;
  quantityFilter: string;
  nameQueryParam : string;
  quantityQueryParam : string;
  p1  : product ={
    id : null,
    name: null,
    quantity : null, 
  };
  p2  : product ={
    id : null,
    name: null,
    quantity : null, 
  };
  p3  : product ={
    id : null,
    name: null,
    quantity : null, 
  };
  productRouter : product;
  formProduct :FormGroup;
  public sub : Subscription;
  productsLenght : any
  products : any[];
  constructor(private service : ProductServieService,
    private formbuilder : FormBuilder,
    private _router: Router,
    private acctiveRoute : ActivatedRoute) { }
  idRouter : any;
  ngOnInit(): void {
    this.getAllList();
    this.createForm();
    this.getIdByParams();
    this.getIdByQueryParams();
    
  }
  getIdByParams(){
    this.acctiveRoute.params.subscribe(data => {
          // console.log(data);
    });
  }
  getIdByQueryParams(){ //name=? && quantity =?
    this.acctiveRoute.queryParams.subscribe(data =>{
      console.log(data);
    })
  }
  
  createForm(){
    this.formProduct= this.formbuilder.group({
      name : ['', [Validators.required,Validators.minLength(4) ,Validators.maxLength(20)]],
      quantity : ['' ,Validators.required]
    })  
  }
  refeshList(){
    this.service.getAllProduct().subscribe(res=> { this.products= res.result ;  console.log(res)});
  }
  refeshForm(){
    this.formProduct.reset();
  }
  onSubmit(){
    console.log(this.formProduct);
   this.service.postProduct(this.p1).subscribe(
     data => { this.refeshList();this.refeshForm();  console.log(data) }
   );
  }
  onUpdateTable(pd : product){
    this.p3 =pd;

  }
  populateForm(pd : product){
    //console.log(pd);
    this.p2 =pd;
    this.redirect(pd.id);
  }
  onUpdate(){
    this.service.putProduct(this.p3).subscribe( res=> {this.refeshList(); this.refeshForm()});
  }
  onDelete(p2){
    this.service.deleteProduct(p2.id).subscribe(res => this.refeshList());
  }
  getAllList(){
    this.sub =this.service.getAllProduct().subscribe( 
      res => {this.products= res.result ; console.log(res); },
      error =>{ console.log(error); }
    );
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  redirect(id: number){
    this._router.navigate(['/productDetail/' + id]);
  }
}
