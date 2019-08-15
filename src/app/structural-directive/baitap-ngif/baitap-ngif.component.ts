import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  status:boolean = true;
  constructor() { }
  ngOnInit() {

  }
  dangNhap(user,pass){
    if(user ==="cybersoft" && pass ==="cybersoft"){
      this.status = false;
    }
  }
  
}
