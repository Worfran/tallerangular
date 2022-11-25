import { Component, OnInit } from '@angular/core';

import { Serie } from '../Serie';
import { SerieService } from '../Serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> =[];
  selected: Boolean = false;
  selectedSerie!: Serie;

  constructor(private serieService: SerieService) { }

  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  promedio(): number{
   var promedio: number=0;
   this.series.forEach( serie => {
      promedio = promedio+serie.seasons;

   });

   promedio = promedio / this.series.length;

   return promedio
  }

  select(serie: Serie): void{
    this.selected = true;
    this.selectedSerie = serie;
  }

  undoSelect(): void{
    this.selected = false;
  }

  ngOnInit() {
    this.getSeries();
  }

}
