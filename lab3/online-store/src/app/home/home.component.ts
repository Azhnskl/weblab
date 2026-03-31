import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:Product[] = [];
  constructor(private productService:ProductService, private route:ActivatedRoute){ }

  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
        this.products = this.productService.getAll().filter(product => 
          product.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      else
        this.products = this.productService.getAll();
    });
  }
}