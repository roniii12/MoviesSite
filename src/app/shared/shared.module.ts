import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../components/shared/alert/alert.component';
import { LoadingSpinnerComponent } from '../components/shared/loading-spinner/loading-spinner.component';
import { MultiThumbRangeComponent } from '../components/shared/multi-thumb-range/multi-thumb-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    MultiThumbRangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    MultiThumbRangeComponent
  ]

})
export class SharedModule { }
