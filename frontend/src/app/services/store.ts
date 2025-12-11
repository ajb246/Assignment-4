import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.api}/products`);
  }

  selectProduct(product: any): Observable<any> {
    return this.http.post(`${this.api}/select-product`, product);
  }

  getSelectedProduct(): Observable<any> {
    return this.http.get(`${this.api}/selected-product`);
  }

  submitOrder(order: any): Observable<any> {
    return this.http.post(`${this.api}/submit-order`, order);
  }
}
