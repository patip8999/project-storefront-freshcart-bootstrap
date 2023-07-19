import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [ErrorComponent],
  providers: [],
  exports: [ErrorComponent]
})
export class ErrorComponentModule {
}
