import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  abouts = [];
  constructor(public client: HttpClient) { }

  ngOnInit(): void {
    this.client.get("http://localhost:8000/api/about")
      .subscribe((res: any) => {
        this.abouts = res;
      });
  }

}
