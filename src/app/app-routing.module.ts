import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StoreComponent } from './components/store/store.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { HomeComponentModule } from './components/home/home.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { StoreComponentModule } from './components/store/store.component-module';
import { AboutUsComponentModule } from './components/about-us/about-us.component-module';
import { HomeTwoComponentModule } from './components/home-two/home-two.component-module';
import { HomeThreeComponentModule } from './components/home-three/home-three.component-module';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'categories/:categoryId', component: CategoriesComponent }, { path: 'stores/:storeId', component: StoreComponent }, { path: 'about-us', component: AboutUsComponent }, { path: 'homeTwo', component: HomeTwoComponent }, { path: 'homeThree', component: HomeThreeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeComponentModule, CategoriesComponentModule, StoreComponentModule, AboutUsComponentModule, HomeTwoComponentModule, HomeThreeComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
