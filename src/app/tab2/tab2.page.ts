import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    sendData: NavigationExtras = {
    state: {myData: 'This is the data'}
  };


  constructor(private router: Router) {}
  goPage2(){

    //lines for sending data using router navigation
    
    this.router.navigate(['page2'], this.sendData)
    .then(nav => {console.log(nav);},
    err => {
console.log(err);
    });
  }
}
