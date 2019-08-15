import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe;
  @Output() eventChoose = new EventEmitter();
  trangThaiChon: boolean = false;
  trangThaiDat: boolean = false;
  mangGheDuocDat: any = [];
  constructor() { }

  ngOnInit() {
  }
  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    this.eventChoose.emit({ ghe: this.ghe, trangThaiChon: this.trangThaiChon });
  }
}
