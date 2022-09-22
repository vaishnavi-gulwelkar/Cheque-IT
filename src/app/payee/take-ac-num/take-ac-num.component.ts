import { Component, Input, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ShowAcDetailsComponent } from '../show-ac-details/show-ac-details.component';
import { bankCustomerInterface } from '../../bankCustomerInterface';
import { BankCustomers } from '../../bank/bankCustomers';
import { selectedUserInterface } from '../../selectedUserInterface';
import { selectedUser } from '../../bank/selectedUser';
import { errorMsg } from '../../bank/errorMsg';
import { errorMsgInterface } from 'src/app/errorMsgInterface';

@Component({
  selector: 'app-take-ac-num',
  templateUrl: './take-ac-num.component.html',
  styleUrls: ['./take-ac-num.component.scss']
})
export class TakeAcNumComponent implements OnInit {

  @Input() bankCustomer : any[] = [];

  selectedUser : selectedUserInterface[] = [];
  errorMsg : errorMsgInterface[] = [];
  requiredForm : FormGroup | any;
  custList: bankCustomerInterface[] = BankCustomers;
    
  constructor
  (
    private router : Router, 
    private  formBuilder : FormBuilder, 
    private showacDetails : ShowAcDetailsComponent,
    private fb: FormBuilder,
        
  ) { 
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group
    (
      {
        bankName: ['', Validators.required],
        acNum: ['', [Validators.required, 
          Validators.pattern("[0-9]{9,18}")] ],
      }          
   );
  }

  ngOnInit(): void {}

  btnClick2(){
    this.router.navigateByUrl('homePage');
  }

  onSubmit(a : string, b : string) 
  {
    let acNo = parseInt(b);
    

    for(let i of this.custList)
    {
      if(i.bankName == a)
      {
        if(i.AccountNumber == acNo){
          selectedUser.push(i);
          this.router.navigateByUrl('showAcDetails');
        }else
        {
          errorMsg.length = 0;
          const newError: errorMsgInterface = 
          {
            error: 'User Not Found'
          }
          errorMsg.push(newError);
          this.router.navigateByUrl('pageNotFound');
        }
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
  }


}
