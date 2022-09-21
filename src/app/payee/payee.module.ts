import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { EnterCheque2Component } from './enter-cheque2/enter-cheque2.component';
import { EnterChequeDetailsComponent } from './enter-cheque-details/enter-cheque-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentSuccessfullComponent } from './payment-successfull/payment-successfull.component';
import { PaymentSuccessfull2Component } from './payment-successfull2/payment-successfull2.component';
import { SelectMethodComponent } from './select-method/select-method.component';
import { ShowAcDetailsComponent } from './show-ac-details/show-ac-details.component';
import { ShowCreditDetailsComponent } from './show-credit-details/show-credit-details.component';
import { TakeAcNumComponent } from './take-ac-num/take-ac-num.component';
import { TakeCreditNumComponent } from './take-credit-num/take-credit-num.component';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { TakePhoto2Component } from './take-photo2/take-photo2.component';



@NgModule({
  declarations: [
    BodyComponent,
    EnterCheque2Component,
    EnterChequeDetailsComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    NotFoundComponent,
    PaymentSuccessfullComponent,
    PaymentSuccessfull2Component,
    SelectMethodComponent,
    ShowAcDetailsComponent,
    ShowCreditDetailsComponent,
    TakeAcNumComponent,
    TakeCreditNumComponent,
    TakePhotoComponent,
    TakePhoto2Component
  ],
  imports: [
    CommonModule
  ]
})
export class PayeeModule { }
