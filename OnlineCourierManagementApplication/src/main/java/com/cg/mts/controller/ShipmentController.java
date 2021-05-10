package com.cg.mts.controller;

import java.time.LocalDate;
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

import com.cg.mts.entities.Courier;
import com.cg.mts.entities.Customer;
import com.cg.mts.exceptions.CourierNotFoundException;
import com.cg.mts.exceptions.CustomerNotFoundException;
import com.cg.mts.exceptions.InvalidUserException;
import com.cg.mts.exceptions.StaffMemberNotFoundException;
import com.cg.mts.jwt.JwtTokenUtil;
import com.cg.mts.service.CustomerSerivceImpl;
import com.cg.mts.service.ShipmentServiceImpl;

import io.jsonwebtoken.SignatureException;

@RestController
@RequestMapping("shipments")
@CrossOrigin(origins = "http://localhost:4200")
public class ShipmentController {

	@Autowired
	ShipmentServiceImpl shipmentService;

	@Autowired
	CustomerSerivceImpl customerSerivce;

	@Autowired
	JwtTokenUtil jwtTokenUtil;

	@GetMapping("/login/{empId}")
	public ResponseEntity<String> validateLogin(@PathVariable("empId") int empId, HttpServletRequest request) {

		if (shipmentService.validateUser(empId)) {
			HttpSession session = request.getSession(true);
			session.setAttribute("userId", empId);
		} else {
			throw new StaffMemberNotFoundException("Incorrect EmpId");
		}

		return new ResponseEntity<String>("Login Success!", HttpStatus.OK);

	}

	@GetMapping("/logout")
	public ResponseEntity<String> logoutUser(HttpServletRequest request) {
		HttpSession session = request.getSession();

		session.invalidate();

		return new ResponseEntity<String>("Logout Success!", HttpStatus.OK);
	}

	// To get the shipment details by shipment id
	@GetMapping("{shipmentId}")
	public ResponseEntity<Courier> getShipment(@Valid @PathVariable("shipmentId") int courierId) {
		Courier courier = shipmentService.getShipmentInfo(courierId);
		if (courier != null) {
			return new ResponseEntity<Courier>(courier, HttpStatus.OK);
		}
		throw new CourierNotFoundException("Courier Not Found!");
	}

	// to get all the shipments available in the database
	@GetMapping
	public ResponseEntity<?> getAllShipments() {
		List<Courier> list = shipmentService.getAllShipments();
		if (list.isEmpty()) {
			return new ResponseEntity<String>("No Shipments Found!", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<List<Courier>>(list, HttpStatus.OK);
	}

	// to check the status of the shipment
	@GetMapping("checkStatus/{shipmentId}")
	public ResponseEntity<?> getShipmentStatus(@PathVariable("shipmentId") int courierId) {
		if (shipmentService.checkShipmentStatus(courierId))
			return new ResponseEntity<String>(
					"Courier status :" + shipmentService.getShipmentInfo(courierId).getStatus(), HttpStatus.OK);
		return new ResponseEntity<String>("Courier Not Found!", HttpStatus.BAD_REQUEST);

	}

	// to get the shipments by their delivery date
	@GetMapping("GetAllByDeliveredDate/{DeliveredDate}")
	public ResponseEntity<?> getAllShipmentsByDeliveredDate(@PathVariable("DeliveredDate") String date1) {
		date1 = date1.trim();
		LocalDate date = LocalDate.parse(date1);
		List<Courier> list = shipmentService.getAllShipmentsByDeliveredDate(date);
		int length = shipmentService.getAllShipmentsByDeliveredDate(date).size();
		if (length == 0) {
			return new ResponseEntity<String>("No Shipments Found!", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<List<Courier>>(list, HttpStatus.OK);
	}

	// to add a shipment
	@PostMapping
	public ResponseEntity<String> initiateShipmentTransaction(@RequestBody Courier courier) {
		if (shipmentService.initiateShipmentTransaction(courier))
			return new ResponseEntity<String>("Courier successfully added", HttpStatus.OK);
		return new ResponseEntity<String>("Unable to add Courier!", HttpStatus.BAD_REQUEST);
	}

	// to delete a shipment by id
	@DeleteMapping("{shipmentId}")
	public ResponseEntity<?> deleteShipment(@PathVariable("shipmentId") int courierId) {
		if (shipmentService.deleteShipment(courierId)) {
			return new ResponseEntity<String>("Delete successfull", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Courier Not Found!", HttpStatus.BAD_REQUEST);
		}
	}

	// to delete all the shipments
	@DeleteMapping("DeleteAll")
	public ResponseEntity<?> deleteAllShipments() {
		if (shipmentService.deleteAllShipments())
			return new ResponseEntity<String>("All Shipments Deleted!", HttpStatus.OK);
		return new ResponseEntity<String>("No Shipments Found To Delete!", HttpStatus.BAD_REQUEST);
	}

	// to delete all the delivered shipments by delivered date
	@DeleteMapping("DeleteByDeliveredDate/{DeliveredDate}")
	public ResponseEntity<?> deleteAllShipmentsByDeliveredDate(@PathVariable("DeliveredDate") String date1) {
		LocalDate date = LocalDate.parse(date1);
		if (shipmentService.deleteAllShipmentsByDeliveredDate(date)) {
			return new ResponseEntity<String>("Deleted all the Shipments with date " + date1 + " !", HttpStatus.OK);
		}
		return new ResponseEntity<String>("No Shipments Found!", HttpStatus.BAD_REQUEST);
	}

	// to update a particular shipment
	@PutMapping
	public ResponseEntity<?> updateShipment(@RequestBody Courier courier) {
		if (shipmentService.updateShipment(courier))
			return new ResponseEntity<String>("Update successfull", HttpStatus.OK);
		return new ResponseEntity<String>("Unable to update", HttpStatus.BAD_REQUEST);
	}

	// to reject particular shipment by shipment id
	@PutMapping("rejectingShipment/{shipmentId}")
	public ResponseEntity<?> rejectShipment(@PathVariable("shipmentId") int courierId) {
		if (shipmentService.rejectShipmentTransaction(courierId)) {
			return new ResponseEntity<String>("Shipment rejected", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Shipment Not Found!", HttpStatus.BAD_REQUEST);
	}

	// to close the transaction of the delivered shipment
	@PutMapping("closingShipment/{shipmentId}")
	public String closeShipmentTransaction(@PathVariable("shipmentId") int courierId) {
		if (shipmentService.closeShipmentTransaction(courierId)) {
			return "Shipment Closed!";
		}
		return "Shipment Not Found!";
	}

	@PatchMapping("{courierId}/{receiverId}/{senderId}")
	public String updateCourier(@PathVariable("courierId") int courierId,
			@PathVariable("receiverId") int receiverId, @PathVariable("senderId") int senderId) {
		Courier courier = shipmentService.getShipmentInfo(courierId);
		Optional<Customer> sender = customerSerivce.getCustomer(senderId);
		Optional<Customer> receiver = customerSerivce.getCustomer(receiverId);

		Customer sender1 = null;
		Customer receiver1 = null;

		if (sender.isPresent()) {
			sender1 = sender.get();
		} else {
			throw new CustomerNotFoundException("customer is not found with id" + senderId);
		}
		if (receiver.isPresent()) {
			receiver1 = receiver.get();
		} else {
			throw new CustomerNotFoundException("customer is not found with id" + receiverId);
		}

		if(courier == null) {
			return "Courier to update not  found";
		}
		courier.setReceiver(receiver1);
		courier.setSender(sender1);

		shipmentService.updateShipment(courier);
		return "Update completed";
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
