import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-photo2',
  templateUrl: './take-photo2.component.html',
  styleUrls: ['./take-photo2.component.scss']
})
export class TakePhoto2Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.router.navigateByUrl('enterChequeDetails2');
  }

}
