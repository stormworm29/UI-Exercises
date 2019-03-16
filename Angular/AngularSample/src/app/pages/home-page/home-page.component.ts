import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from "@angular/router";
import Product from 'src/app/models/Product';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products;

  constructor(private productService: ProductService, private router :Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe( data => {
      this.products = data;
    });

  }
  navigate(product :Product) {
    this.router.navigate(["/productDetail", product.id]);
  }
}
