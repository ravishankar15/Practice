package com.example.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public abstract class AbstractBaseDao {
	
	@Autowired
	protected JdbcTemplate jdbcTemplate;

}
