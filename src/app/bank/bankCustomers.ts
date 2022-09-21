import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bankCustomerInterface } from '../bankCustomerInterface';

export const BankCustomers: bankCustomerInterface[] = 
[
  {
    fullName : 'Anushka Chavan',
    AccountNumber: 12345678901,
    mobNum : 7499402570,
    debitCard : 1234567890,
    dob : '15/1/2000',
    aadhrCardNum : 1234567890,
    panNum : 'AC1234STUV',
    email : 'anuchavan@gmail.com',
    creditCardNum : 12345678900,
    bankName : 'SBI'
  },
  {
    fullName : 'Rohith Parjane',
    AccountNumber: 1234567890,
    mobNum : 9561487711,
    debitCard : 1234567890,
    dob : '09/11/1998',
    aadhrCardNum : 1234567890,
    panNum : 'DDPPP1234B',
    email : 'rparjane@gmail.com',
    creditCardNum : 1234567890,
    bankName : 'SBI'
  }
];
