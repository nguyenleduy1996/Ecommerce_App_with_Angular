import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    isSidePaneVisible :boolean = false
    productObj:any = {
      productId : 0,
      productSku : '',
      productName : '',
      productPrice : "",
      productShortName : '',
      productDescription : '',
      createdDate : new Date(),
      deliveryTimeSpan : '',
      categoryId : 0,
      productImageUrl : '',
    }
    constructor(private productSrv: ProductService){
      
    }
    openSidePanel(){
      this.isSidePaneVisible = true
    }
    closeSidepanel(){
      this.isSidePaneVisible = false
    }
} 
