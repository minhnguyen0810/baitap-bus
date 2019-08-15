import { Component, OnInit ,ViewChild } from '@angular/core';
import { DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  //Dom toi component danh sach phim
  // thong qua taglist movie se thay tat ca pro vaf pt ma danh sach phim dang co
  @ViewChild(DanhSachPhimComponent,{static : false}) tagListMovie:DanhSachPhimComponent;
  constructor() { }

  ngOnInit() {
  }
  addMovie(_maPhim,_tenPhim,_giaPhim,_anhPhim){
    console.log(_maPhim , _tenPhim , _giaPhim , _anhPhim);
    const phim = {
      maPhim : _maPhim,
      tenPhim : _tenPhim,
      gia:_giaPhim,
      hinhAnh : _anhPhim

    }
    this.tagListMovie.themPhim(phim);
  }
}
