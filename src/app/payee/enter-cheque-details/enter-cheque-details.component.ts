import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankCustomers } from 'src/app/bank/bankCustomers';
import { chequeDetails } from 'src/app/bank/chequeDetails';
import { errorMsg } from 'src/app/bank/errorMsg';
import { bankCustomerInterface } from 'src/app/bankCustomerInterface';
import { errorMsgInterface } from 'src/app/errorMsgInterface';
import { chequeDetailsInterface } from '../../chequeDetailsInterface';

@Component({
  selector: 'app-enter-cheque-details',
  templateUrl: './enter-cheque-details.component.html',
  styleUrls: ['./enter-cheque-details.component.scss']
})
export class EnterChequeDetailsComponent implements OnInit {

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

  chequeDetails : chequeDetailsInterface[] = [];
  requiredForm : FormGroup | any;
  chequeList: chequeDetailsInterface[] = chequeDetails;  
  errorMsg : errorMsgInterface[] = [];
  custList: bankCustomerInterface[] = BankCustomers;

  constructor(private router :Router, private fb: FormBuilder,) {
    this.myForm();
   }

  myForm() {
    this.requiredForm = this.fb.group
    (
      {
        payee : ['', Validators.required],
        payer : ['', Validators.required],
        amountInNum : ['',[Validators.required]],
        chequeDate: ['', [Validators.required, 
          Validators.pattern("^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$")] ]
      }          
   );
  }

  ngOnInit(): void {

    this.day = this.myDate.getDate().toString();
    this.month = this.myDate.getMonth().toString();
    this.year = this.myDate.getFullYear().toString();

    this.fullDate = this.day +'/'+ this.month +'/'+ this.year;
    document.getElementById('depositDate')?.setAttribute('placeholder',this.fullDate);
    document.getElementById('depositDate')?.setAttribute('value',this.fullDate);

  }

  onReset(){
    this.router.navigateByUrl('selectMethod');
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
      }else{
        errorMsg.length = 0;
        const newError: errorMsgInterface = 
        {
          error: 'User Not Found'
        }
        errorMsg.push(newError);
        console.log('msgs : ',errorMsg.length);
          this.router.navigateByUrl('pageNotFound');
        }
      }
    } 

}
