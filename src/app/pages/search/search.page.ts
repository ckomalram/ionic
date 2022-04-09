import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[]= [];
  valorBuscado: string;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getAlbumes().subscribe(albumes  => {
      this.albumes = albumes;
    });

    this.valorBuscado='';
  }
  onSearchChange(ev: any){
    console.log(ev);
    this.valorBuscado = ev.detail.value;
  }
}
