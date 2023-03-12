import { TagStoreModel } from "../models/tag-store.model";

export interface StoreWithTagsQueryModel {
    
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly distanceInMeters: number;
  readonly tags: TagStoreModel[];
}
