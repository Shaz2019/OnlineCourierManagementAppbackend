package com.cg.mts.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.mts.dao.IAddressDao;
import com.cg.mts.entities.Address;
import com.cg.mts.entities.Complaint;
import com.cg.mts.entities.Courier;
import com.cg.mts.entities.CourierStatus;
import com.cg.mts.entities.Customer;
import com.cg.mts.entities.Payment;
import com.cg.mts.exceptions.CourierNotFoundException;
import com.cg.mts.exceptions.CustomerNotFoundException;
import com.cg.mts.exceptions.StaffMemberNotFoundException;
import com.cg.mts.service.CustomerSerivceImpl;
import com.cg.mts.service.ICustomerService;
import com.cg.mts.jwt.JwtTokenUtil;
import com.cg.mts.exceptions.InvalidUserException;

import io.jsonwebtoken.SignatureException;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
	
	@Autowired
	 CustomerSerivceImpl   customerSerivce;
	@Autowired
	IAddressDao addressDao;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	
	@PostMapping
	public ResponseEntity<String> addNewCustomer(@RequestBody Customer customer,HttpServletRequest request) {
		validateToken(request);
		Customer customer2 = customerSerivce.addCustomer(customer);
		
		
		if (customer2 == null)
			return new ResponseEntity("Insertion Error!", HttpStatus.BAD_REQUEST);

		return new ResponseEntity<String>("Customer Added Successfully!", HttpStatus.OK);

	}

	@GetMapping("/{customerId}")
	public Customer getCustomer(@PathVariable("customerId") int customerId,HttpServletRequest request) {
		validateToken(request);
		Optional<Customer> customer = customerSerivce.getCustomer(customerId);
		if (customer == null)
			throw new CustomerNotFoundException("dd","dd");//return new ResponseEntity("Courier Office with id " + customerId + " not found", HttpStatus.BAD_REQUEST);
		else {
			return customer.get();//new ResponseEntity<Customer>(customer.get(), HttpStatus.FOUND);
		}
	}

	@GetMapping//("/getAllCustomers")
	public ResponseEntity<List<Customer>> getAllCustomers(HttpServletRequest request) {
		validateToken(request);
		List<Customer> customers = customerSerivce.getAllCustomers();
		if (customers == null)
			return new ResponseEntity("No Customers Available!", HttpStatus.BAD_REQUEST);

		return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
	}

	@PatchMapping("/initiateProcess/{senderCustomerId}/{receiverCustomerId}/{consignmentNo}")
	public ResponseEntity<String> initiateProcess(@PathVariable("senderCustomerId") int senderCustomerId,
			@PathVariable("receiverCustomerId") int receiverCustomerId,
			@PathVariable("consignmentNo") int consignmentNo) {

		Courier courier = customerSerivce.initiateProcess(senderCustomerId, receiverCustomerId, consignmentNo);
		if (courier == null)
			return new ResponseEntity("Insertion Error!", HttpStatus.NOT_FOUND);

		return new ResponseEntity<String>("Courier Added Successfully!", HttpStatus.OK);

	}

	@PatchMapping("{courierId}/{paymentMode}")
	public ResponseEntity<String> makePayment(@PathVariable("courierId") int courierId,
			@PathVariable("paymentMode") String mode) {

		Payment payment = customerSerivce.makePayment(courierId, mode);
		if (payment == null)
			return new ResponseEntity("Insertion Error!", HttpStatus.NOT_FOUND);

		return new ResponseEntity<String>("Payment Added Successfully!", HttpStatus.OK);

	}

	@PostMapping("/complaint")
	public ResponseEntity<String> addNewComplaint(@RequestBody Complaint complaint) {
		Complaint complaint2 = customerSerivce.registerComplaint(complaint);
		if (complaint2 == null)
			return new ResponseEntity("Insertion Error!", HttpStatus.BAD_REQUEST);
		return new ResponseEntity<String>("Complaint Added Successfully!", HttpStatus.OK);
	}

	@DeleteMapping("/{customerid}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("customerid") Integer customerid) {

		customerSerivce.deleteCustomerById(customerid);

		Optional<Customer> customer2 = customerSerivce.getCustomer(customerid);
		// System.out.println("*********************************" + customer2);

		if (customer2.isPresent())
			return new ResponseEntity("Deletion Error!", HttpStatus.BAD_REQUEST);

		return new ResponseEntity<String>("Customer Deleted Successfully!", HttpStatus.OK);

	}

	@GetMapping("courier/{courierId}")
	public ResponseEntity<?> getCourier(@PathVariable("courierId") int courierId) {// throws OutletNotFoundException {

		CourierStatus courier = customerSerivce.checkOnlineTrackingStatus(courierId);
		if (courier == null)
			return new ResponseEntity("Courier Office with id " + courierId + " not found", HttpStatus.BAD_REQUEST);
		else {
			return new ResponseEntity<CourierStatus>(courier, HttpStatus.FOUND);
		}
	}
	
	
	
	

	@PatchMapping("{customerId}/{aadharNo}/{firstName}/{lastName}/{mobileNo}")
	public String updateCustomerDetails(@PathVariable(name = "customerId") int customerId,@PathVariable(name = "aadharNo") int aadharNo,
			@PathVariable(name = "firstName") String firstName, @PathVariable(name = "lastName") String lastName,
			@PathVariable(name = "mobileNo") int mobileNo,HttpServletRequest request) {
		validateToken(request);

		Optional<Customer> customer = customerSerivce.getCustomer(customerId);
		// Customer customer1= new Customer();
		Customer customer2 = customer.get();

		if (customer2 == null) {
			throw new CustomerNotFoundException("Customer is not found with id" + customerId,"not found");
		} else {
			customer2.setCustomerId(customerId);
			customer2.setAadharNo(aadharNo);
			customer2.setFirstName(firstName);
			customer2.setLastName(lastName);
			customer2.setMobileNo(mobileNo);
			customerSerivce.updateCustomer(customer2);
			return "Update completed";
		}

	}
	
	
	@PatchMapping("{customerId}/{houseNo}/{city}/{state}/{country}/{zip}/{street}")
    public String updateAdress(@PathVariable("customerId") int customerId,
            @PathVariable("houseNo") String houseNo, @PathVariable("city") String city,
            @PathVariable("state") String state, @PathVariable("country") String country,
            @PathVariable("zip") int zip, @PathVariable("street") String street, HttpServletRequest request) {

 

        validateToken(request);
        Customer customer = customerSerivce.getCustomer(customerId).get();
        Address address = new Address();

 

        if (customer == null) {
            throw new CustomerNotFoundException("Courier Office with id " , " not found");
        } else {
            address.setHouseNo(houseNo);
            address.setStreet(street);
            address.setCity(city);
            address.setState(state);
            address.setCountry(country);
            address.setZip(zip);
            addressDao.save(address);
            customer.setAddress(address);
            customerSerivce.updateCustomer(customer);
            return "Courier Office address sucessfully updated";
        }
        }
	
	
	
	
	
	
	public void validateToken(HttpServletRequest request) {
		final String tokenHeader = request.getHeader("Authorization");

		String jwtToken = null;

		if (tokenHeader == null)
			throw new InvalidUserException("User Not Logged In or token not included");
		// JWT Token is in the form "Bearer token". Remove Bearer word
		if (!tokenHeader.startsWith("Bearer "))
			throw new InvalidUserException("Invalid Token");

		jwtToken = tokenHeader.substring(7);
		try {
			if (!(jwtTokenUtil.validateToken(jwtToken)))
				throw new InvalidUserException("Token Expired. Need Relogin");

		} catch (SignatureException ex) {
			throw new InvalidUserException("Invalid Token");
		}
	}
}
