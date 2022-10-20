import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs'
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
 product:Product[]
 cartCollection : AngularFirestoreCollection<CartItem>;
  constructor(private firestore: Firestore) { }
id:string;
  sendMsg(cart:any) {
    
    
    const productRef = collection(this.firestore, 'cart');
    return addDoc(productRef, cart);

    //this.subject.next(product) Triggering an event
    //this.cartCollection.add(cart); 
  }

  getMsg(): Observable<Product[]> {

    const placeRef = collection(this.firestore, 'cart');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Product[]>;
    
    //return this.subject.asObservable()
  }

  getId(product : Product){
    const clienteDocRef = doc(this.firestore, `cart/${product.id}`);
    console.log(clienteDocRef)
    return getDoc
  }

  deleteCliente(product: CartItem) {
    
    const clienteDocRef = doc(this.firestore, `cart/${product.id}`);
    console.log(`${product.id}`)
    return deleteDoc(clienteDocRef);
  }
}
