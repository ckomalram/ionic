import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroesData: Observable<any>;
  categoria: string;
  campo: string;
  constructor(private ds: DataService) { }

  ngOnInit() {
   this.superHeroesData= this.ds.getHeroes();
   this.categoria='';
   this.campo='publisher';
  }

  segmentChanged(ev: any){
    console.log(ev);
    this.categoria= ev.detail.value;
  }

}
