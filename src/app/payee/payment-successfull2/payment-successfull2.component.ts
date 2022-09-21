import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chequeDetails } from 'src/app/bank/chequeDetails';
import { chequeDetailsInterface } from 'src/app/chequeDetailsInterface';

@Component({
  selector: 'app-payment-successfull2',
  templateUrl: './payment-successfull2.component.html',
  styleUrls: ['./payment-successfull2.component.scss']
})
export class PaymentSuccessfull2Component implements OnInit {

  @Input() chequeDetails : chequeDetailsInterface[] = [];

  amount = 0;
  
  constructor(private router : Router) { }

  ngOnInit(): void {
    for(let i=0; i<chequeDetails.length; i++){
      this.amount = chequeDetails[i].chequeAmount;
      console.log('Amount : ',this.amount);
    }

  }

  btnClick(){
    this.router.navigateByUrl('homePage');
  }

}
