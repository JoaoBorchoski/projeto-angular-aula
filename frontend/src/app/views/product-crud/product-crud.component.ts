import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  // constructor(private router: Router, private headerService: HeaderService) {
  //   headerService.headerData = {
  //     title: 'Cadastro de Produtos',
  //     icon: 'storefront',
  //     routeUrl: '/products',
  //   };
  // }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
