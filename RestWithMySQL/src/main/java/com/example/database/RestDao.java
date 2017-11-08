package com.example.database;

import java.util.List;

public interface RestDao {
	
	public List<RestDto> getDetails() throws Exception;
	public boolean addDetails(RestDto restDto) throws Exception;
	public boolean updateDetails(RestDto restDto) throws Exception;
	public boolean deleteDetails(RestDto restDto) throws Exception;

}
