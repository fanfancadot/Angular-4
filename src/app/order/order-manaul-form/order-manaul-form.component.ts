import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderRow } from '../order-rows.model';

@Component({
  selector: 'app-order-manaul-form',
  templateUrl: './order-manaul-form.component.html',
  styleUrls: ['./order-manaul-form.component.css']
})
export class OrderManaulFormComponent implements OnInit {

@Output() add = new EventEmitter<OrderRow>();

manualFormData = new OrderRow();

emitAdd(){
  this.add.emit(this.manualFormData);
  this.manualFormData = new OrderRow();
}
  constructor() { }

  ngOnInit() {
  }

}
