import { Component, OnInit } from '@angular/core';
import { DatashareService} from '../datashare.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  message: any;
  constructor( private sharedService: DatashareService) 
  { }
  ngOnInit() 
  {this.sharedService.sharedMessage.subscribe(message => this.message= message);  }
  newMessage() 
  {this.sharedService.setMessage(this.message);  }

}
