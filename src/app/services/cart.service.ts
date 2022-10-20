import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { idToken } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;
  product: Observable<Product>;
  //private firestore: Firestore
  
  
 // clientesColeccion: AngularFirestoreCollection<CartItem>;


  constructor(
    private db: AngularFirestore,
    ) { }

  getCartItems( id:string): Observable<CartItem[]> {

    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())

    return  this.db.collection('cart').snapshotChanges().pipe(
      map( result => {
        let cartItems: CartItem[] = [];
      
        for (let item of result) {
          let productExists = true
          let index = 0;
          //console.log(item.payload.doc.data())
          for (let i in cartItems) {
            if (cartItems[i].productId === id) {
              console.log(id)
              cartItems[i].qty++
              productExists = false
              index++
              break;
            }
            index++
          }

          if (productExists) {
              cartItems.push(new CartItem(index.toString(),item.payload.doc.data() as any));                        //cartItems.push(new CartItem(item.id, item.product));
          }
        }
        return cartItems;
      })
    );
  }

  
  getProduct(id: string): Observable<any> {
       
    const prueba =this.db.collection('products').doc(id).snapshotChanges();
    //console.log(prueba);
    return prueba
    
  }

  addProductToCart(id:string): Observable<any> {
    
    
    const prueba =this.db.collection('products').doc(id).snapshotChanges();
    //console.log(prueba);
    return prueba //enviar a cart y luego pedirlo

    //this.agregarCliente(prueba)
    
    //return this.http.post(cartUrl, { product });
  }


}
