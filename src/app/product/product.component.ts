import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productItem: ProductItem[] = [
    new ProductItem(1, 'Model 3', 49500, 'assets/images/model3.png'),
    new ProductItem(2, 'Model X', 90000, 'assets/images/modelx.png'),
    new ProductItem(3, 'Model S', 70000, 'assets/images/models.png'),
    new ProductItem(4, 'Model Y', 55000, 'assets/images/modely.png'),
    new ProductItem(5, 'Cyber T', 65000, 'assets/images/modelt.png'),
    new ProductItem(6, 'Sport R', 250000, 'assets/images/modelr.png'),
    new ProductItem(7, 'Truck 1', 295000, 'assets/images/rivian.png'),
    new ProductItem(8, 'Truck 2', 200000, 'assets/images/semi.png'),

  ]

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  constructor() { }

  ngOnInit() {
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
      productId: this.productItem[index].id,
      productName: this.productItem[index].name,
      productPrice: this.productItem[index].price
    });
  }


}
