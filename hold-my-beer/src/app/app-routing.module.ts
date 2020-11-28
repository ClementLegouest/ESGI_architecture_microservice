import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/component/welcome/welcome.component';
import {BookingComponent} from './booking/components/booking/booking.component';
import {OrderComponent} from './order/components/order/order.component';

const routes: Routes = [
  {path: 'index', component: WelcomeComponent},
  {path: 'book', component: BookingComponent},
  {path: 'order', component: OrderComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
