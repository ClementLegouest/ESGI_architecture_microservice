import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/component/welcome/welcome.component';
import { HeaderComponent } from './header/components/header/header.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { BookingComponent } from './booking/components/booking/booking.component';
import { OrderComponent } from './order/components/order/order.component';
import { DrinkCardComponent } from './drink/components/drink-card/drink-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    OrderComponent,
    DrinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
