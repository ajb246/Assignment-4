import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  product: any;

  constructor(
    private store: StoreService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    
    this.product = this.store.getProduct();

  
    if (!this.product) {
      this.http.get('http://localhost:3000/api/selected-product')
        .subscribe(data => this.product = data);
    }
  }

  submitOrder() {
    this.http.post('http://localhost:3000/api/submit-order', { product: this.product })
      .subscribe((res: any) => {
        alert(res.message);
      });
  }
}
