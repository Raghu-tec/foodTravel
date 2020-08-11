import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-headertitle',
  templateUrl: './headertitle.component.html',
  styleUrls: ['./headertitle.component.css']
})
export class HeadertitleComponent implements OnInit {
  
  todaydate;
  constructor(private myservice: MyserviceService) {
  }
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }


}
