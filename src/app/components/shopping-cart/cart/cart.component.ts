import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { CartItemComponent } from './cart-item/cart-item.component';
import { NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //@ViewChild(CartItemComponent) idPorFin: CartItemComponent;
  
  
  //@ViewChild(CartItemComponent) child: string;
  //@ViewChild(CartItemComponent) child: CartItemComponent;
 //@ViewChild('prueba') ngModel:NgModel;
  //@ViewChild('prueba') domReference: any;
 // @ViewChildren('NgModel') domReference: QueryList<NgModel>;
  
  cartItems: any[] = [/*
    {id:1, productId:1,productName: 'test1', qty:4,price:100},
    {id:1, productId:1,productName: 'test1', qty:4,price:100},
    {id:1, productId:1,productName: 'test1', qty:4,price:100},
    {id:1, productId:1,productName: 'test1', qty:4,price:100}*/
  ];
 
cartTotal = 0
qty_:number
 id:string
  messageSuccess= true;
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private toastr: ToastrService,
    private productService: ProductService,
  ) { }
  

  ngOnInit() {
    this.handleSubscription();
    //this.loadCartItems();
    this.calcCartTotal();
    //this.message = this.child.message 
    
  }
  

  handleSubscription() {
    this.msg.getMsg().subscribe((product) => {
      this.cartItems = product
      //console.log(this.cartItems);
      //this.msg.getId(this.cartItems as any)
      this.loadCartItems();
      //this.calcCartTotal();
    })
    
    return this.cartItems
  }
   
  

 
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      console.log(item.qty)
    this.cartTotal += (1 * item.price)
    })
  }

loadCartItems() {
    // Tu código...
    /*
    console.log(this.id)
    this.cartService.getCartItems(this.id).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      console.log(items)
      this.calcCartTotal();
    });*/
    this.productService.getCart().subscribe((items:CartItem[]) => {
      this.cartItems = items;
      console.log(items)
      this.calcCartTotal();
    });
  }
     
  onClickDelete(cartItem:CartItem){ if(confirm('Seguro que desea eliminar el producto?')){
    const response = this.msg.deleteCliente(cartItem);
    //console.log(response);
  }
  this.toastr.error('El producto fue eliminado con exito', 'Registro eliminado!', {
    positionClass: 'toast-bottom-right'
  });
  }


}


/*
  
  //Old logic 

/*
  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price
    //   })
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price
    //       })
    //     }
    //   }
    // }

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  */

  

