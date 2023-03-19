export interface StoreQueryModel {
    readonly id: string;
    readonly name: string;
    readonly logoUrl: string;
    readonly distanceInMeters: number;
    readonly tagIds: string[];
}
