import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-them-san-pham',
  templateUrl: './baitap-them-san-pham.component.html',
  styleUrls: ['./baitap-them-san-pham.component.scss']
})
export class BaitapThemSanPhamComponent implements OnInit {
  sanPham = function(masp,tensp,giasp){
    this.maSP = masp;
    this.tenSP = tensp;
    this.giaSP = giasp;
  }
  mangSP:any = [];
  constructor() {
    
   }

  ngOnInit() {
  }
  ThemSanPham(_maSP,_tenSP,_giaSP){
    let sp = new this.sanPham(_maSP,_tenSP,_giaSP);
    this.mangSP.push(sp);
    console.log(this.mangSP);
  }

}
