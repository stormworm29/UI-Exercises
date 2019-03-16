import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Product from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  getAllProducts() :Observable<Product[]>{
    // return new Promise((resolve, reject) => {
    //   fetch("https://api.myjson.com/bins/y7dty#")
    //     .then(response => response.json())
    //     .then(data => resolve(data));
    // });

    return this.http.get<Product[]>("https://api.myjson.com/bins/y7dty#");
  }

}
