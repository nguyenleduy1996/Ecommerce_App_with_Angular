import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
    isSidePaneVisible :boolean = false
    categoryList :any [] = []
    productsList:any[] = []
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
    ngOnInit(): void {
      this.getAllcategory()
      this.getProducts()
    }
    getAllcategory(){
      this.productSrv.getCategory().subscribe((res:any)=>{
        this.categoryList = res.data;
      })

    }
    getProducts() {
      this.productSrv.getProducts().subscribe((res: any) => {
        this.productsList = res.data;

      });
    }
  
    openSidePanel(){
      this.isSidePaneVisible = true
    }
    closeSidepanel(){
      this.isSidePaneVisible = false
    }
    onSave(){

      console.log(this.productObj)
    
    }
    onEdit(item:any){
      this.productObj = item;
      this.  openSidePanel();
    }
    onUpdate(){
      this.productSrv.UpdateProduct(this.productObj).subscribe((res:any)=>{
        if(res.result){
          alert("Product Updated")
        }else{
          alert(res.messege)
        }
        this.getProducts()
      })
    }
    onDelete(item:any){
      this.productObj = item
      const isConfirm = confirm("Muon xoa Chu")
      if(isConfirm){
        this.productSrv.DeleteProduct(this.productObj).subscribe((res:any)=>{
          if(res.result){
            alert("Product Updated")
            this.getProducts()
          }else{
            alert(res.messege)
          }
       
        })
      }

    }
} 
