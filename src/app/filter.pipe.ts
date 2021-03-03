import { Pipe, PipeTransform } from '@angular/core';
import { product } from './models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pro : product[],id :any , name : string , quantity : string ): any {
    
    if(!id && !name && !quantity){
      return pro;
    }
    else {
      if(id){
           pro = pro.filter( x => {
              return x.id.toString().indexOf(id)!= -1;

        })
      }
      if(name){
        pro = pro.filter( x => {
           return x.name.toLocaleLowerCase().toString().indexOf(name.toLowerCase())!= -1;

        })
     }
    if(quantity){
        pro = pro.filter( x => {
          return x.quantity.toLowerCase().toString().indexOf(quantity.toLowerCase())!= -1;

        })
    }
    return pro;

    }
    
  }

}
