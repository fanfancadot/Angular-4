import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderManaulFormComponent } from './order-manaul-form/order-manaul-form.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrderRootComponent, OrderTableComponent, OrderManaulFormComponent],
  exports: [OrderRootComponent]
})
export class OrderModule { }
