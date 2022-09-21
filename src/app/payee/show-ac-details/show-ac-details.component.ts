import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { selectedUserInterface } from '../../selectedUserInterface';
import { selectedUser } from '../../bank/selectedUser';

@Component({
  selector: 'app-show-ac-details',
  templateUrl: './show-ac-details.component.html',
  styleUrls: ['./show-ac-details.component.scss']
})
export class ShowAcDetailsComponent implements OnInit {

  @Input() selectedUser : selectedUserInterface[] = [];
  
  acNo = 0;
  acHolder = '';
  constructor(private router : Router) {  
   }

  ngOnInit(): void {

    console.log('Selected User : ',selectedUser);

    for(let i=0; i<selectedUser.length; i++){
      this.acNo = selectedUser[i].AccountNumber;
      this.acHolder = selectedUser[i].fullName;
      console.log('acHolder : ',this.acHolder);
    }
  }

  btnClick(){
    this.router.navigateByUrl('takePhoto');
  }

  btnClick2(){
    this.router.navigateByUrl('selectMethod');
  }


}
