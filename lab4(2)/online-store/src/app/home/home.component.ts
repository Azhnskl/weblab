import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../shared/models/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:Product[] = [];
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  constructor(public productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void{

    this.categories = this.productService.getCategories();

    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
        this.products = this.productService.getAll().filter(product => 
          product.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      else
        this.products = this.productService.getAll();
    });
  }

  selectCategory(cat: Category): void{
    this.selectedCategory = cat;
    this.products = this.productService.getByCategory(cat.id);
  }

  deleteProduct(id: number): void {
  this.products = this.products.filter(p => p.id !== id);
  }
  
}