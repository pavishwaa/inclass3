import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService} from '../../datashare.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})

export class Page2Page implements OnInit {

  data: any;
  message: any;

  constructor( private router: Router, private sharedService: DatashareService) 

  {
    if (this.router.getCurrentNavigation().extras.state)
    {
      this.data = this.router.getCurrentNavigation().extras.state.myData;
      
    }
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      message => this.message = message);
  }
}
