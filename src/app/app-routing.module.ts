import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StoreComponent } from './components/store/store.component';
import { HomeComponentModule } from './components/home/home.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { StoreComponentModule } from './components/store/store.component-module';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'categories/:categoryId', component: CategoriesComponent }, { path: 'stores/:storeId', component: StoreComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeComponentModule, CategoriesComponentModule, StoreComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
