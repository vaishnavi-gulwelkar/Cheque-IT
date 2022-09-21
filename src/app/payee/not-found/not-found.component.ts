import { Component, Input, OnInit } from '@angular/core';
import { errorMsg } from 'src/app/bank/errorMsg';
import { errorMsgInterface } from 'src/app/errorMsgInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Input() errorMsg : errorMsgInterface[] = [];

  msg = '';

  constructor(private router : Router) { }

  ngOnInit(): void {

    for(let i=0; i<errorMsg.length; i++)
    {
      this.msg = errorMsg[i].error;
    }

  }

  btnClick(){
    this.router.navigateByUrl('homePage');
  }

}
