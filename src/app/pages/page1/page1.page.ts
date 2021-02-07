import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data:any;

  ngOnInit() {
    this.data = this.route.snapshot.params.parm;
    console.dir(this.route.snapshot);
  }

}
