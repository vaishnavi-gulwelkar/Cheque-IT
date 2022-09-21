import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent } from './payee/body/body.component';
import { HomePageComponent } from './payee/home-page/home-page.component';
import { SelectMethodComponent} from './payee/select-method/select-method.component';
import { TakeAcNumComponent } from './payee/take-ac-num/take-ac-num.component';
import { ShowAcDetailsComponent } from './payee/show-ac-details/show-ac-details.component';
import { TakePhotoComponent } from './payee/take-photo/take-photo.component';
import { EnterChequeDetailsComponent } from './payee/enter-cheque-details/enter-cheque-details.component';
import { PaymentSuccessfullComponent } from './payee/payment-successfull/payment-successfull.component';
import { TakeCreditNumComponent } from './payee/take-credit-num/take-credit-num.component';
import { ShowCreditDetailsComponent } from './payee/show-credit-details/show-credit-details.component';
import { TakePhoto2Component } from './payee/take-photo2/take-photo2.component';
import { EnterCheque2Component } from './payee/enter-cheque2/enter-cheque2.component';
import { PaymentSuccessfull2Component } from './payee/payment-successfull2/payment-successfull2.component';
import { NotFoundComponent } from '../app/payee/not-found/not-found.component';

const routes: Routes = [

  { path :'', component : BodyComponent },
  { path : 'homePage', component: HomePageComponent },
  { path : 'selectMethod', component : SelectMethodComponent },
  { path : 'takeAcNum', component: TakeAcNumComponent },
  { path : 'showAcDetails', component:ShowAcDetailsComponent },
  { path : 'takePhoto', component:TakePhotoComponent },
  { path : 'enterChequeDetails', component:EnterChequeDetailsComponent },
  { path : 'paymentSuccessfull', component:PaymentSuccessfullComponent },
  { path : 'takeCreditNum', component:TakeCreditNumComponent },
  { path : 'showCreditDetails', component : ShowCreditDetailsComponent},
  { path : 'takePhoto2', component : TakePhoto2Component},
  { path : 'enterChequeDetails2', component : EnterCheque2Component},
  { path : 'paymentsuccess2', component : PaymentSuccessfull2Component},
  { path : 'pageNotFound', component : NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
