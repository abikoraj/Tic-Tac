import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  amount = 1;
  from = 'NPR';
  to = 'INR';
  rate = 0.625;

  convert():number{
    return this.amount * this.rate;
  }
  constructor(private app:AppService) { }

  ngOnInit(): void {

  }

}
