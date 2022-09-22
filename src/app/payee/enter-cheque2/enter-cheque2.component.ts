import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankCustomers } from 'src/app/bank/bankCustomers';
import { chequeDetails } from 'src/app/bank/chequeDetails';
import { bankCustomerInterface } from 'src/app/bankCustomerInterface';
import { chequeDetailsInterface } from 'src/app/chequeDetailsInterface';
import { errorMsgInterface } from 'src/app/errorMsgInterface';
import { errorMsg } from 'src/app/bank/errorMsg';
import { selectedUser } from '../../bank/selectedUser';

@Component({
  selector: 'app-enter-cheque2',
  templateUrl: './enter-cheque2.component.html',
  styleUrls: ['./enter-cheque2.component.scss']
})
export class EnterCheque2Component implements OnInit {


  myDate: Date = new Date();
  day  = '';
  month = '';
  year = '';
  fullDate = '';

  payTo='';
  payerName='';
  chequeDate='';
  currentDate='';
  chequeAmount : number = 0;
  acHolder = '';

  chequeDetails : chequeDetailsInterface[] = [];
  chequeList: chequeDetailsInterface[] = chequeDetails;     
  errorMsg : errorMsgInterface[] = [];
  custList: bankCustomerInterface[] = BankCustomers;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.day = this.myDate.getDate().toString();
    this.month = this.myDate.getMonth().toString();
    this.year = this.myDate.getFullYear().toString();

    this.fullDate = this.day +'/'+ this.month +'/'+ this.year;
    document.getElementById('depositDate')?.setAttribute('placeholder',this.fullDate);
    document.getElementById('depositDate')?.setAttribute('value',this.fullDate);

    for(let i=0; i<selectedUser.length; i++){
      this.acHolder = selectedUser[i].fullName;
    }

  }

  btnClick2(){
    this.router.navigateByUrl('homePage');
  }

  onSubmit(a : string ,payer : string,chequeDate : string,depositDate : string,amountInNum : string)
  {   
    this.payTo = a;
    this.payerName = payer;
    this.chequeDate = chequeDate;
    this.currentDate = depositDate;
    this.chequeAmount = parseInt(amountInNum);

    const newCheque: chequeDetailsInterface = 
    {
      payTo: this.payTo,
      payerName: this.payerName,
      chequeDate: this.chequeDate,
      currentDate : this.currentDate,
      chequeAmount: this.chequeAmount,
    }

    for(let i of this.custList){
      if(i.fullName == a)
      {
        chequeDetails.push(newCheque);
        this.router.navigateByUrl('paymentSuccessfull');
      }
      else{
        errorMsg.length = 0;
        const newError: errorMsgInterface = 
        {
          error: 'User Not Found'
        }
        errorMsg.push(newError);
        console.log('msgs : ',errorMsg);
          this.router.navigateByUrl('pageNotFound');
        }
      }
    } 

}
