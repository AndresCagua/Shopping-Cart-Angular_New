import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartComponent } from '../cart.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
 

  @Input() cartItem: any
  @Input() price: number
  cart: any
  prueba:string
  render:boolean
  
  constructor(private msg: MessengerService,
    public father: CartComponent,
    private cartService: CartService,
    private toastr: ToastrService) { }

  ngOnInit() {
   
    //console.log(this.cartItem.id)
    
  }
  ngAfterViewChecked(){
    
    this.render_()
  }
  ngOnChanges(){
    this.render = false
    this.cartService.getCartItems(this.cartItem.id).subscribe((items: CartItem[]) => {
      this.cart = items;
      console.log(items)
      
    });
  }
  ngAfterViewInit(){
    
    
    
  }

  render_(){
    if ((this.cart != undefined) &&(this.cartItem != undefined)) {
      //console.log(this.cartItem.length)
     //console.log(this.cart.length)
      //console.log(this.render)
    }
    else{
      console.log('no entro')
    }
    
    if ((this.cart != undefined) ){
      this.render = true
      //console.log(this.render)
      this.cart=this.cartItem
      //console.log(this.cart.price)
    }
  }

  }

