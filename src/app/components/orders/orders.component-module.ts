import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [OrdersComponent],
  providers: [],
  exports: [OrdersComponent]
})
export class OrdersComponentModule {
}
