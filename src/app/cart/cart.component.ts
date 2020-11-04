import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private CartService: CartService,
    private formbuilder: FormBuilder
  ) {
    this.checkoutForm = this.formbuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.CartService.getItems();
  }

  onSubmit(customerData) {
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();

    console.warn("Your order was submitted!", customerData);
  }
}
