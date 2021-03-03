import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { product } from '../models/product.model';
import { productReponse } from '../models/productReponse';
@Injectable({
  providedIn: 'root'
})
export class ProductServieService {
  url = 'http://localhost:21021/api/services/app/Product';
  constructor(private http :HttpClient) { }
  getAllProduct() : Observable<productReponse>{
    return this.http.get<productReponse>(this.url + '/GetAllProduct');
  }
  postProduct(pro : product) : Observable<product>{
    pro.id= undefined;
    return this.http.post<product>(this.url + "/InsertProduct",pro);
  }
  putProduct(pro : product) : Observable<product>{
    return this.http.put<product>(this.url + "/PutProduct" ,pro);
  }
  deleteProduct(id) : Observable<product>{

    return this.http.delete<product>(this.url + "/DeleteProduct?id=" + id);
  }
  getProductById(id) {
    return this.http.get(this.url + '/GetById?id=' + id);
  }
  
}
