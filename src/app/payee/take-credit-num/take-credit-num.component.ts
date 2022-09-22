import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankCustomers } from 'src/app/bank/bankCustomers';
import { selectedUser } from 'src/app/bank/selectedUser';
import { bankCustomerInterface } from 'src/app/bankCustomerInterface';
import { selectedUserInterface } from 'src/app/selectedUserInterface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { errorMsgInterface } from 'src/app/errorMsgInterface';
import { errorMsg } from '../../bank/errorMsg';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-take-credit-num',
  templateUrl: './take-credit-num.component.html',
  styleUrls: ['./take-credit-num.component.scss']
})
export class TakeCreditNumComponent implements OnInit {

  selectedUser : selectedUserInterface[] = [];
  requiredForm : FormGroup | any;
  errorMsg : errorMsgInterface[] = [];
  custList: bankCustomerInterface[] = BankCustomers;

  constructor(
    private router : Router, 
    private  formBuilder : FormBuilder,
    private fb: FormBuilder,
  ) {
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group
    (
      {
        bankName : ['', Validators.required],
        accountNum : ['', [Validators.required]],
      }          
   );
  }

  ngOnInit(): void {
  }

  onSubmit( a: string, b :string){
    let creditNum = parseInt(b);

    for(let i of this.custList){
      if(i.bankName == a)
      {
        if(i.creditCardNum === creditNum){
          selectedUser.push(i);
          console.log('Selected User : ',selectedUser);
        }else{
          errorMsg.length = 0;
          const newError: errorMsgInterface = 
          {
            error: 'User Not Found'
          }
          errorMsg.push(newError);          
          this.router.navigateByUrl('pageNotFound');
        }
      }
      else{
        errorMsg.length = 0;
        const newError: errorMsgInterface = 
        {
          error: 'User Not Found'
        }
        errorMsg.push(newError);
        this.router.navigateByUrl('pageNotFound');
      }
    } 
    this.router.navigateByUrl('showCreditDetails');
  }

  onCancel(){
    this.router.navigateByUrl('homePage');
  }


}
