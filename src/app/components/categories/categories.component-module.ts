import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
