import { Component, OnInit } from '@angular/core';
import { OrderRow } from '../order-rows.model';
import { CatalogService } from '../catalog.service';
import { Book } from '../../book.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css'],
  providers : [CatalogService]
})
export class OrderRootComponent implements OnInit {
  manualMode = false;


  rows = [
      new OrderRow('La nuit des temps','René Barjavel',7,3),
      new OrderRow('Des fleurs pour Algernon','Daniel Keyes',6,5)
  ];
  
  books$ : Observable<Book[]>;

  constructor(private catalog: CatalogService) { }

  removeRow(row: OrderRow) :void{
    this.rows = this.rows.filter(r => r !== row);
  }
  addRow(row: OrderRow) : void{
    this.rows.push(row);
  }
  ngOnInit() {
    this.books$ = this.catalog.getList();
  }

}
