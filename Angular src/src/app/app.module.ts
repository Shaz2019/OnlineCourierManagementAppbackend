import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowStaffComponent } from './show-staff/show-staff.component';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';
import { UpdateStaffAddComponent } from './update-staff-add/update-staff-add.component';
import { HomeComponent } from './home/home.component';
import { AllcomplaintsComponent } from './allcomplaints/allcomplaints.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { CheckComplaintComponent } from './check-complaint/check-complaint.component';
import { ShowpaymentComponent } from './showpayment/showpayment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { OfficeComponent } from './office/office.component';
import { ShowofficeComponent } from './showoffice/showoffice.component';
import { OfficelistComponent } from './officelist/officelist.component';
import { UpdateofficeComponent } from './updateoffice/updateoffice.component';
import { AddofficeComponent } from './addoffice/addoffice.component';
import { CourierComponent } from './courier/courier.component';
import { AllCouriersComponent } from './all-couriers/all-couriers.component';
import { BydelivereddateComponent } from './bydelivereddate/bydelivereddate.component';
import { CourierStatusComponent } from './courier-status/courier-status.component';
import { AddcourierComponent } from './addcourier/addcourier.component';
import { UpdatecourierComponent } from './updatecourier/updatecourier.component';
import { CloseShipmentComponent } from './close-shipment/close-shipment.component';
import { RejectshipmentComponent } from './rejectshipment/rejectshipment.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    AddEmployeeComponent,
    LoginComponent,
    LogoutComponent,
    ShowStaffComponent,
    UpdatestaffComponent,
    UpdateStaffAddComponent,
    HomeComponent,
    AllcomplaintsComponent,
    AboutusComponent,
    PaymentComponent,
    ComplaintComponent,
    CheckComplaintComponent,
    ShowpaymentComponent,
    PaymentlistComponent,
    OfficeComponent,
    ShowofficeComponent,
    OfficelistComponent,
    UpdateofficeComponent,
    AddofficeComponent,
    CourierComponent,
    AllCouriersComponent,
    BydelivereddateComponent,
    CourierStatusComponent,
    AddcourierComponent,
    UpdatecourierComponent,
    CloseShipmentComponent,
    RejectshipmentComponent,
    CustomerComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    AddressUpdateComponent,
    ShowcustomerComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
