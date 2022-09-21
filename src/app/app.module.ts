import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './payee/header/header.component';
import { BodyComponent } from './payee/body/body.component';
import { FooterComponent } from './payee/footer/footer.component';
import { HomePageComponent } from './payee/home-page/home-page.component';
import { TakeAcNumComponent } from './payee/take-ac-num/take-ac-num.component';
import { ShowAcDetailsComponent } from './payee/show-ac-details/show-ac-details.component';
import { TakePhotoComponent } from './payee/take-photo/take-photo.component';
import { EnterChequeDetailsComponent } from './payee/enter-cheque-details/enter-cheque-details.component';
import { PaymentSuccessfullComponent } from './payee/payment-successfull/payment-successfull.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectMethodComponent } from './payee/select-method/select-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomePageComponent,
    TakeAcNumComponent,
    ShowAcDetailsComponent,
    TakePhotoComponent,
    EnterChequeDetailsComponent,
    PaymentSuccessfullComponent,
    SelectMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TakeAcNumComponent,
    ShowAcDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
