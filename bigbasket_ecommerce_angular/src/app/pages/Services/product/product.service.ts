import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory(){
    const _http :string = Constant.APILOCAL+Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY
    console.log(_http)
    return this.http.get(_http )
  }

  getProducts() {
    return this.http.get(Constant.APILOCAL+Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
  }
  saveProduct(obj:any){
    return this.http.post(Constant.BASE_APILOCAL_POST+"CreateProduct", obj);
  }
  UpdateProduct(obj:any){
    return this.http.post(Constant.BASE_APILOCAL_POST+"UpdateProduct", obj);
  }
  DeleteProduct(obj:any){
    console.log(obj)
    return this.http.post(Constant.BASE_APILOCAL_POST+"DeleteProductById",obj);
  }
}
