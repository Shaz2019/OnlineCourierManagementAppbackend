import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddcourierComponent } from './addcourier/addcourier.component';
import { AddofficeComponent } from './addoffice/addoffice.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import { AllCouriersComponent } from './all-couriers/all-couriers.component';
import { AllcomplaintsComponent } from './allcomplaints/allcomplaints.component';
import { BydelivereddateComponent } from './bydelivereddate/bydelivereddate.component';
import { CheckComplaintComponent } from './check-complaint/check-complaint.component';
import { CloseShipmentComponent } from './close-shipment/close-shipment.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { CourierStatusComponent } from './courier-status/courier-status.component';
import { CourierComponent } from './courier/courier.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerComponent } from './manager/manager.component';
import { OfficeComponent } from './office/office.component';
import { OfficelistComponent } from './officelist/officelist.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { RejectshipmentComponent } from './rejectshipment/rejectshipment.component';
import { AuthGuard } from './services/auth-guard.service';
import { ShowStaffComponent } from './show-staff/show-staff.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { ShowofficeComponent } from './showoffice/showoffice.component';
import { ShowpaymentComponent } from './showpayment/showpayment.component';
import { UpdateStaffAddComponent } from './update-staff-add/update-staff-add.component';
import { UpdatecourierComponent } from './updatecourier/updatecourier.component';
import { UpdateofficeComponent } from './updateoffice/updateoffice.component';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';

const routes: Routes = [
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard]},
  {path:'add',component:AddEmployeeComponent},
  {path:'show',component:ShowStaffComponent},
  {path:'update',component:UpdatestaffComponent},
  {path:'updateAdd', component:UpdateStaffAddComponent},
  {path:'allComp', component:AllcomplaintsComponent},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'payment',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'complaint',component:ComplaintComponent},
  {path:'checkcomplaint',component:CheckComplaintComponent},
  {path:'showpayment',component:ShowpaymentComponent},
  {path:'paymentlist',component:PaymentlistComponent },
  {path:'office',component:OfficeComponent,canActivate:[AuthGuard] },
  {path:'showoffice',component:ShowofficeComponent },
  {path:'officelist',component:OfficelistComponent},
  {path:'updateofficeadd',component:UpdateofficeComponent },
  {path:'addoffice',component:AddofficeComponent},
  {path:'courier',component:CourierComponent,canActivate:[AuthGuard]},
  {path:'getall' ,component:AllCouriersComponent},
  {path:'byDate',component:BydelivereddateComponent},
  {path:'cstatus',component:CourierStatusComponent},
  {path:'addcourier',component:AddcourierComponent},
  {path:'updatecourier',component:UpdatecourierComponent},
  {path:'closeshipment',component:CloseShipmentComponent},
  {path:'rejectshipment',component:RejectshipmentComponent},
  {path:'customer',component:CustomerComponent,canActivate:[AuthGuard]},
  {path:'addcustomer',component:CreateCustomerComponent},
  {path:'custList',component:CustomerListComponent},
  {path:'updateCust/:customerId',component:CustomerUpdateComponent},
  {path:'updateCustAdd',component:AddressUpdateComponent},
  {path:'showcust',component:ShowcustomerComponent},
  {path:'addPyament',component:AddPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
