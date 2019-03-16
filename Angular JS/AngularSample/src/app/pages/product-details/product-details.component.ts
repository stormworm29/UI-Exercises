import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    // this.productService.getAllProducts()
    // .subscribe( data => {
    //   this.products = data;
    // });
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productService.getAllProducts().subscribe(data => {
    this.products = data.filter(product => product.id == parseInt(id));
    }
    );
  }
}
