import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-method',
  templateUrl: './select-method.component.html',
  styleUrls: ['./select-method.component.scss']
})
export class SelectMethodComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    console.log('I am in button click function');
    this.router.navigateByUrl('takeAcNum');
  }

  btnClick2(){
    console.log('I am in button click function');
    this.router.navigateByUrl('takeCreditNum');
  }

}
