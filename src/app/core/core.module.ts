import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RupeePipe } from '../pipe/rupee.pipe';



@NgModule({
  declarations: [
    RupeePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RupeePipe,
    CommonModule
  ]
})
export class CoreModule { }
