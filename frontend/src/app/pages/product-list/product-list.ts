import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(
    private http: HttpClient,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/api/products')
      .subscribe((data: any) => this.products = data);
  }

  buy(product: any) {
   
    this.store.setProduct(product);

   
    this.http.post('http://localhost:3000/api/select-product', product)
      .subscribe(() => {
        this.router.navigate(['/review']);
      });
  }
}
