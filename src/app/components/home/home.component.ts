import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of, switchMap, map, combineLatest } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { StoreModel } from '../../models/store.model';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { StoresService } from '../../services/stores.service';
import { ProductsService } from '../../services/products.service';
import { TagStoreModel } from 'src/app/models/tag-store.model';
import { StoreWithTagsQueryModel } from 'src/app/query-models/store-with-tags.query-model';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly categoriesList$: Observable<CategoryModel[]> =
    this._categoriesService.getAll();
  readonly storeList$: Observable<StoreWithTagsQueryModel[]> = combineLatest([
    this._storesService.getAll(),
    this._storesService.getAllTags(),

]).pipe(
  map(([stores, tags]) => this.mapTagStore(tags, stores)));
 

 

  readonly GetToKnowUs$: Observable<string[]> = of([
    'Company',
    'About',
    'Blog',
    'Help Center',
    'Our Value',
  ]);
  readonly productsList$: Observable<ProductModel[]> =
    this._productsService.getAll();

    
  readonly fruitId$: Observable<string> = of('5');

  readonly FruitList$: Observable<ProductModel[]> = 
  this.fruitId$.pipe(
    switchMap((categoryId) =>
      this.productsList$.pipe(
        map((products) =>
          products
            .filter((products) => products.categoryId === categoryId)
            .sort((a, b) => b.featureValues - a.featureValues)
            .slice(0, 5)
        )
      )
    )
  );

  readonly fruitCategory$: Observable<CategoryModel | undefined> =
  combineLatest([this.fruitId$, this.FruitList$]).pipe(
    map(([catId, categories]) => categories.find((c) => c.id === catId))
  )

  readonly SnackId$: Observable<string> = of('2');
  readonly SnackList$: Observable<ProductModel[]> = 
  this.SnackId$.pipe(
    switchMap((categoryId) =>
      this.productsList$.pipe(
        map((products) =>
          products
            .filter((products) => products.categoryId === categoryId)
            .sort((a, b) => b.featureValues - a.featureValues)
            .slice(0, 5)
        )
      )
    )
  );

  constructor(
    private _categoriesService: CategoriesService,
    private _storesService: StoresService,
    private _productsService: ProductsService
  ) {}


  mapTagStore (
    tags: TagStoreModel[],
    stores: StoreModel[]
  ): StoreWithTagsQueryModel[] {
    const tagMap = tags.reduce((a, c) => ({ ...a, [c.id]: c }), {}) as Record<
      string,
      TagStoreModel
    >;
    return stores.map((store) => ({
      id: store.id,
      name: store.name,
      logoUrl: store.logoUrl,
      distanceInMeters: store.distanceInMeters,
      tags: store.tagIds.map((tagId) => tagMap[tagId]) as TagStoreModel[],
    }));
  }
}
