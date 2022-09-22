import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { selectedUser } from 'src/app/bank/selectedUser';
import { selectedUserInterface } from 'src/app/selectedUserInterface';

@Component({
  selector: 'app-show-credit-details',
  templateUrl: './show-credit-details.component.html',
  styleUrls: ['./show-credit-details.component.scss']
})
export class ShowCreditDetailsComponent implements OnInit {

  @Input() selectedUser : selectedUserInterface[] = [];
  
  acNo = 0;
  acHolder = '';
  
  constructor(private router : Router) { }

  ngOnInit(): void 
  {
    console.log('Selected User : ',selectedUser);

    for(let i=0; i<selectedUser.length; i++){
      this.acNo = selectedUser[i].AccountNumber;
      this.acHolder = selectedUser[i].fullName;
      
      console.log('acHolder : ',this.acHolder);
    }
  }

  btnClick(){
    this.router.navigateByUrl('takePhoto2');
  }

  btnClick2(){
    this.router.navigateByUrl('homePage');
  }

}
