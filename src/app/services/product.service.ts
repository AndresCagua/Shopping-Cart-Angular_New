import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
//import { productsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';
import { collection, collectionData, Firestore, orderBy } from '@angular/fire/firestore';
import { CartItem } from '../models/cart-item';
import { CartService } from './cart.service';

//const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  cartItems: Observable<CartItem[]>;
constructor(private firestore: Firestore,
  private cartService: CartService) { } //this.productsCollection = db.collection('products', ref => ref.orderBy('description','asc'));



getProducts() :  Observable<Product[]>{ //:{Product[]{
//TODO: Populate products from an API and return an Observable
    
 //Obtener los productos
        
 const placeRef = collection(this.firestore, 'products'); 
 return collectionData(placeRef, { idField: 'id' }) as Observable<Product[]>;


    //console.log(this.products)
    //return this.products
    //return this.http.get<Product[]>(apiUrl);
    //return this.http.get<Product[]>(productsUrl);

    
     
    
  }

  getCart(): Observable<CartItem[]>{
    const placeRef = collection(this.firestore, 'cart'); 
    return collectionData(placeRef, { idField: 'id' }) as Observable<CartItem[]>;
    

  }
}
