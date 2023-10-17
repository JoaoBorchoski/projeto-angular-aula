import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`;

    return this.http.put<Product>(url, product);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url);
  }
}