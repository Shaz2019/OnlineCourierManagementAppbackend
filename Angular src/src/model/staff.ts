import { Address } from 'src/model/address';
import { Office } from './office';

export interface Staff{
    empId:number;
    name:string;
    role:string;
    ad:Address;
    mn:Staff;
    of:Office
}