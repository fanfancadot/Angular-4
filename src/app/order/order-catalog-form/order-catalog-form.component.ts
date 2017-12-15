import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../book.model';
import { OrderRow } from '../order-rows.model';

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})
export class OrderCatalogFormComponent implements OnInit {

@Input () catalog: Book[];
@Output() add = new EventEmitter<OrderRow>();

catalogFormData : {book?:  Book,quantity?: number} = {}

emitAdd(){
    this.add.emit(new OrderRow(
                              this.catalogFormData.book.title,
                              this.catalogFormData.book.author,
                              this.catalogFormData.book.price,
                              this.catalogFormData.quantity || 1,
                              )
                  );
    this.catalogFormData = {};             
}

  constructor() { }

  ngOnInit() {
  }

}
