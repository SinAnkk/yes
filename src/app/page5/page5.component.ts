import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(){
    this.router.navigate(['page3']);
  }

}
