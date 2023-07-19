import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StoreComponent } from './components/store/store.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreGridComponent } from './components/store-grid/store-grid.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { BlogCategoryComponent } from './components/blog-category/blog-category.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AdressComponent } from './components/adress/adress.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeComponentModule } from './components/home/home.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { StoreComponentModule } from './components/store/store.component-module';
import { AboutUsComponentModule } from './components/about-us/about-us.component-module';
import { HomeTwoComponentModule } from './components/home-two/home-two.component-module';
import { HomeThreeComponentModule } from './components/home-three/home-three.component-module';
import { StoreListComponentModule } from './components/store-list/store-list.component-module';
import { StoreGridComponentModule } from './components/store-grid/store-grid.component-module';
import { BlogComponentModule } from './components/blog/blog.component-module';
import { BlogSingleComponentModule } from './components/blog-single/blog-single.component-module';
import { BlogCategoryComponentModule } from './components/blog-category/blog-category.component-module';
import { ErrorComponentModule } from './components/error/error.component-module';
import { ContactComponentModule } from './components/contact/contact.component-module';
import { SingInComponentModule } from './components/sing-in/sing-in.component-module';
import { SignUpComponentModule } from './components/sign-up/sign-up.component-module';
import { ForgotPasswordComponentModule } from './components/forgot-password/forgot-password.component-module';
import { OrdersComponentModule } from './components/orders/orders.component-module';
import { SettingsComponentModule } from './components/settings/settings.component-module';
import { AdressComponentModule } from './components/adress/adress.component-module';
import { PaymentComponentModule } from './components/payment/payment.component-module';
import { NotificationComponentModule } from './components/notification/notification.component-module';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'categories/:categoryId', component: CategoriesComponent }, { path: 'stores/:storeId', component: StoreComponent }, { path: 'about-us', component: AboutUsComponent }, { path: 'homeTwo', component: HomeTwoComponent }, { path: 'homeThree', component: HomeThreeComponent }, { path: 'storeList', component: StoreListComponent }, { path: 'storeGrid', component: StoreGridComponent }, { path: 'blog', component: BlogComponent }, { path: 'blog-single', component: BlogSingleComponent }, { path: 'blog-category', component: BlogCategoryComponent }, { path: 'error', component: ErrorComponent }, { path: 'contact', component: ContactComponent }, { path: 'sing-in', component: SingInComponent }, { path: 'sign-up', component: SignUpComponent }, { path: 'forgot-password', component: ForgotPasswordComponent }, { path: 'orders', component: OrdersComponent }, { path: 'settings', component: SettingsComponent }, { path: 'adress', component: AdressComponent }, { path: 'payment', component: PaymentComponent }, { path: 'notification', component: NotificationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeComponentModule, CategoriesComponentModule, StoreComponentModule, AboutUsComponentModule, HomeTwoComponentModule, HomeThreeComponentModule, StoreListComponentModule, StoreGridComponentModule, BlogComponentModule, BlogSingleComponentModule, BlogCategoryComponentModule, ErrorComponentModule, ContactComponentModule, SingInComponentModule, SignUpComponentModule, ForgotPasswordComponentModule, OrdersComponentModule, SettingsComponentModule, AdressComponentModule, PaymentComponentModule, NotificationComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
