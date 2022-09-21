import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.component.html',
  styleUrls: ['./take-photo.component.scss']
})
export class TakePhotoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.router.navigateByUrl('enterChequeDetails');
  }

}
