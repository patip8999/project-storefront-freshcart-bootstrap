import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { StoreModel } from '../../models/store.model';
import { CategoriesService } from '../../services/categories.service';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly categoriesList$: Observable<CategoryModel[]> = this._categoriesService.getAll();
  readonly storeList$: Observable<StoreModel[]> = this._storesService.getAll();
readonly GetToKnowUs$: Observable<string[]> = of (['Company', 'About', 'Blog', 'Help Center', 'Our Value']);
  constructor(private _categoriesService: CategoriesService, private _storesService: StoresService) {
  }
}
