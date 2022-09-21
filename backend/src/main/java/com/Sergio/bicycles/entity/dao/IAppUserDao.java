package com.Sergio.bicycles.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.Sergio.bicycles.entity.model.AppUser;

public interface IAppUserDao extends CrudRepository<AppUser, Long> {

	
	
}
