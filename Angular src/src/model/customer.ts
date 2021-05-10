import { Address } from 'src/model/address';
//import { BankAccount } from 'src/model/bankaccount';

export interface Customer {
    customerId: number;
    aadharNo: number;
    firstName: string;
    lastName: string;
    mobileNo: number;
    addressId: number;
    accountNo: number;
    ad: Address;
    //ba: BankAccount;

}
