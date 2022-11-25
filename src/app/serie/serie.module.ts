import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SerieDetailComponent,
    SerieListComponent
  ],
  exports: [
    SerieDetailComponent,
    SerieListComponent
  ],
})
export class SerieModule { }
