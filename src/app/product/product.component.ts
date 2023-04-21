import { Component } from '@angular/core';
import { productInfo } from '../interface/productInfo.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productInfo:productInfo = 
    {
      productId: 1,
      firstProduct: "../../assets/product1-1.png",
      secondProduct: "../../assets/product1-2.png",
      thirdProduct: "../../assets/product1-3.png",
      productName: "Gradient",
      price: 8,
      colorName: ["Purple", "Pink", "Orange" ],
      stock: 10,
      description: "This is sticker with beautiful gradient. Lorem ipsum dolor sit amet, consect etur adipiscing elit. Vivamus nec nisl quis tellus maximus blandit."
    }

    mainImage: string = this.productInfo.firstProduct;

    switchImage(imagePath: string) {
      this.mainImage = imagePath;
      const items = document.querySelectorAll('#carousel .carousel-item');
      items.forEach(item => item.classList.remove('active'));
      if (this.productInfo.firstProduct === imagePath) {
        items[0].classList.add('active');
      } else if (this.productInfo.secondProduct === imagePath) {
        items[1].classList.add('active');
      } else if (this.productInfo.thirdProduct === imagePath) {
        items[2].classList.add('active');
      }
    }

    selectedColor: string = '';
    showErrorMessage: boolean = false;

    constructor(private router: Router) {}
    
    addToCart() {
      if (this.selectedColor === '') {
        this.showErrorMessage = true;
      } else {
        this.showErrorMessage = false;
        this.router.navigate(['/cart']);
      }
    }

}
