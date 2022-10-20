import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from 'src/app/models/cart-item';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  @Input() productId:string;
  @Input() addedToWishlist: boolean;

  cartItem:CartItem;
  products: Product[];
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
      
      
  }

  handleAddToCart() {
    /*this.msg.sendMsg(this.productItem)
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })*/
    //console.log(this.productId)
    this.cartService.addProductToCart(this.productId).subscribe(() => {
      //console.log(this.productItem);
      //this.productItem= this.cartItem
      this.msg.sendMsg(this.productItem)
    })
    this.toastr.info('El articulo fue agregado con exito', 'Cart modificado', {
      positionClass: 'toast-bottom-right'
    })
  }
    //this.cartService.getProduct(this.productItem.id);
  }
     



/*
  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    })
  }*/