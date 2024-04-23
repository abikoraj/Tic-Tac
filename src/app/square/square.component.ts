import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
  @Output()hfhj :EventEmitter<number>=new EventEmitter<number>();
  // rand = Math.random();

  constructor() {
    // setInterval(() => this.rand = Math.random(), 500);
  }

  ngOnInit(){

    this.hfhj.emit(99);
  }

}
