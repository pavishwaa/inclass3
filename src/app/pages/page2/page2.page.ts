import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})

export class Page2Page implements OnInit {

  data: any;
  constructor( private router: Router) { 
    if (this.router.getCurrentNavigation().extras.state)
    {
      this.data = this.router.getCurrentNavigation().extras.state.myData;
      
    }
  }

  ngOnInit() {
  }

}
