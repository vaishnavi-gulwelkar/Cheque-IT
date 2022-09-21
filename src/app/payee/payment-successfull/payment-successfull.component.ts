import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { chequeDetailsInterface } from '../../chequeDetailsInterface';
import { chequeDetails } from '../../bank/chequeDetails';

@Component({
  selector: 'app-payment-successfull',
  templateUrl: './payment-successfull.component.html',
  styleUrls: ['./payment-successfull.component.scss']
})
export class PaymentSuccessfullComponent implements OnInit {

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
