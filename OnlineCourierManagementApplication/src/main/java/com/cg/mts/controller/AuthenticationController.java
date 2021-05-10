package com.cg.mts.controller;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.mts.entities.User;
import com.cg.mts.exceptions.InvalidUserException;
import com.cg.mts.jwt.JwtRequest;
import com.cg.mts.jwt.JwtResponse;
import com.cg.mts.jwt.JwtTokenUtil;
import com.cg.mts.dao.UserRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/authenticate")
public class AuthenticationController {

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	UserRepository userRepository;

	User user;

	@PostMapping
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest request) throws Exception {

		Optional<User> userData = userRepository.findById(request.getUsername());

		if (userData.isPresent()) {
			user = userData.get();
		} else {
			throw new InvalidUserException("User not found with username: " + request.getUsername());
		}

		if (!(user.getPassword().equals(request.getPassword())))
			throw new InvalidUserException("Invalid Password");

		String token = jwtTokenUtil.generateToken(user);

		return ResponseEntity.ok(new JwtResponse(token));
	}

}
