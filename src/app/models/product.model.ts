export interface ProductModel {
  readonly name: string;
  readonly price: string;
  readonly categoryId: string;
  readonly ratingValue: string;
  readonly ratingCount: string;
  readonly imageUrl: string;
  readonly featureValues: number;
  readonly storeIds: string[];
  readonly id: string;
}
