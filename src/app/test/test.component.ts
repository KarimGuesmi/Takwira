import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/productmodel';
import { ProductService } from '../services/products.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  // This declaration with the previous version
  //products:Product[];
  // NB: si on declare une variable Observable on lui met $ a la fin de la variable
  products$:Observable<Product[]>;
  
  constructor(private productsService:ProductService) { }


  ngOnInit() {
   
}
onGetAllProducts(){
  //Better version
  this.products$=this.productsService.getAllProducts();

  // Previous version 
  /**this.productsService.getAllProducts().subscribe(data=>{
    this.products=data;
  })**/
}

  
}


