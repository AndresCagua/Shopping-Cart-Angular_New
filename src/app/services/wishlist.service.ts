import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
/*
  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any []) => {
        let productIds: any[] = []

        result.forEach((item => productIds.push(item.id))

        return productIds;
      })
    )
  }

  addToWishlist(productId: number) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId: string | number) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }*/
}
