import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadComponent } from './head.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [HeadComponent],
  providers: [],
  exports: [HeadComponent]
})
export class HeadComponentModule {
}
