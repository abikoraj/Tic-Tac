import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private app:AppService) { }

  ngOnInit(): void {
    this.app.items+=2;
    console.log(this.app.items);
  }

}
