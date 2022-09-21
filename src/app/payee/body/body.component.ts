import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gob(){
    console.log('I am in go function');
    this.router.navigateByUrl('homePage');
  }

}
