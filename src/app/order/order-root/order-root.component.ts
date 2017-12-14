import { Component, OnInit } from '@angular/core';
import { OrderRow } from '../order-rows.model';

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit {
 manualMode = false;
  rows = [
      new OrderRow('La nuit des temps','René Barjavel',7,3),
      new OrderRow('Des fleurs pour Algernon','Daniel Keyes',6,5)
  ];
  constructor() { }

  removeRow(row: OrderRow) :void{
    this.rows = this.rows.filter(r => r !== row);
  }
  ngOnInit() {
  }

}
