import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, of, take, tap } from 'rxjs';
import { CategoryModel } from 'src/app/models/category.model';
import { StoreModel } from 'src/app/models/store.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { StoresService } from 'src/app/services/stores.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent {
  readonly CategoriesList$: Observable<CategoryModel[]> = this._categoriesService.getAll();
  private _hamburgerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public Hamburger$: Observable<boolean> = this._hamburgerSubject.asObservable();
  readonly storesList$: Observable<StoreModel[]> = this._storesService.getAll();

  readonly GetToKnowUs$: Observable<string[]> = of([
    'Company',
    'About',
    'Blog',
    'Help Center',
    'Our Value',
  ]);

  constructor(private _categoriesService: CategoriesService, private _storesService: StoresService) {
  }


  ShowHamburger() {
    this.Hamburger$.pipe(take(1),
      tap(() => this._hamburgerSubject.next(true))
    ).subscribe()
  }

  HideHamburger() {
    this.Hamburger$.pipe(take(1),
      tap(() => this._hamburgerSubject.next(false))
    ).subscribe()
  }
}

