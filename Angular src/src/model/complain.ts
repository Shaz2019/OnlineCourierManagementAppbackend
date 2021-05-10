import { CombineLatestSubscriber } from "rxjs/internal/observable/combineLatest";
import { Courier } from "src/model/courier";

export interface Complaint{
complaintId:number;
detailedDescription:string;
shortDescription:string;
courierId:Courier;
}