import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  todaydate;
  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }
}
