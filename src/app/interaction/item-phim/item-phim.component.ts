import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  
  @Input() phim;
  @Output() eventLike = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  like(){
    // console.log(this.phim);
    //Day du lieu tu con ra cha
    this.eventLike.emit(this.phim);
  }
}
