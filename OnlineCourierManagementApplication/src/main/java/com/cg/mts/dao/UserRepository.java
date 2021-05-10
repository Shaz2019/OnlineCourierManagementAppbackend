package com.cg.mts.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.mts.entities.User;

public interface UserRepository extends JpaRepository<User, String> {

}
