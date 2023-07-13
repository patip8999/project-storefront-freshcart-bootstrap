import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { TagStoreModel } from '../../models/tag-store.model';
import { StoreQueryModel } from '../../query-models/store.query-model';
import { ProductModel } from '../../models/product.model';
import { StoresService } from '../../services/stores.service';
import { ProductsService } from '../../services/products.service';
import { StoreModel } from '../../models/store.model';

@Component({
  selector: 'app-store',
  styleUrls: ['./store.component.scss'],
  templateUrl: './store.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  readonly storeId$: Observable<string> = this._activatedRoute.params.pipe(
    map((params) => params['storeId'])
  );
  readonly tags$: Observable<TagStoreModel[]> =
    this._storesService.getAllTags();

  readonly storeList$: Observable<StoreQueryModel> = combineLatest([
    this.storeId$,
    this.tags$,
  ]).pipe(
    switchMap(([store, tags]) =>
      this._storesService
        .getOne(store)
        .pipe(map((store) => this._mapToStoreQuery(tags, store)))
    )
  );
  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.storeId$,
    this.search.valueChanges
      .pipe(map((form) => form.title))
      .pipe(startWith('')),
  ]).pipe(
    map(([products, storeId, search]) =>
      products
        .filter((product) => product.storeIds.includes(storeId))
        .slice(0, 6)
        .filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
    )
  );
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _storesService: StoresService,
    private _productsService: ProductsService
  ) {}

  private _mapToStoreQuery(
    Tag: TagStoreModel[],
    store: StoreModel
  ): StoreQueryModel {
    const storeTagMap = Tag.reduce(
      (a, c) => ({ ...a, [c.id]: c }),
      {} as Record<string, TagStoreModel>
    );
    return {
      name: store.name,
      logoUrl: store.logoUrl,
      id: store.id,
      distanceInMeters: Math.round(store.distanceInMeters / 100) / 10,
      tagIds: store.tagIds.map((sId) => storeTagMap[sId]?.name),
    };
  }
}
