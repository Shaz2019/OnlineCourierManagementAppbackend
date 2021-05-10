import { Complaint } from "src/model/complain";
import { Customer } from "src/model/customer";
import { Payment } from "src/model/payment";
import { CourierStatus } from "src/model/courierstatus";

export interface Courier{
    courierId: number;
    consignmentNo: number;
    initiatedDate: string;
    status: CourierStatus;
    deliveredDate: string;
    sender:Customer;
    receiver:Customer;
    complaint: Complaint;
    payment: Payment;
}