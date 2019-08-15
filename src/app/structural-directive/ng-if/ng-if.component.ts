import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status:boolean = true;
  statusLogin:boolean =false
  constructor() { }
  
  ngOnInit() {
  }
  show(){
    this.status = true;
  }
  hidden(){
    this.status = false;
  }
  toggle(){
    this.status = !this.status;
  }
  dangXuat(){
    this.statusLogin=true;
  }
  dangNhap(){
    this.statusLogin=false;
  }
}
