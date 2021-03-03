import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from 'src/app/components/home/home.component';

@Injectable()
export class AccessGuard implements CanDeactivate<HomeComponent> {
  public error : number=  0;
  canDeactivate() : boolean{
    if(localStorage.getItem('key')){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  
  
}
