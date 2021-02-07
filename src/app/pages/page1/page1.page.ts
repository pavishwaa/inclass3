import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatashareService} from '../../datashare.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private route: ActivatedRoute, private sharedService: DatashareService) { }

  data:any;
  message: any;

  
  ngOnInit() {
    this.data = this.route.snapshot.params.parm;
    console.dir(this.route.snapshot);
    
    this.sharedService.sharedMessage.subscribe(message => this.message= message); 
  
  }

}
