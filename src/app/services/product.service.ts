import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl = 'http://localhost:8080/api/products';

  constructor(private httpClient:HttpClient) { }
   getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseurl).pipe(
      map(Response=>Response._embedded.products)
    );
    
   }
}
interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
