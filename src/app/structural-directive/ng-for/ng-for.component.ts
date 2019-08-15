import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachSinhVien:any =[
    {
      ten:"Nguyen",tuoi:18
    },
    {
      ten:"Nhan",tuoi:21
    },
    {
      ten:"Hao ",tuoi:22
    },
    {
      ten : "Minh",tuoi:23
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
