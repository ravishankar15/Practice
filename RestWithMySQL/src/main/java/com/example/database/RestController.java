package com.example.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.GsonBuilder;

@Controller
@RequestMapping("/RestMySql")
public class RestController {
	
	@Autowired
	private RestDao restDao;
	
	@RequestMapping(value="/getDetails", method=RequestMethod.GET)
	public @ResponseBody String getDetails(){
		String response = "ERROR";
		try{
			List<RestDto> detailsList = restDao.getDetails();
			response = new GsonBuilder().disableHtmlEscaping().create().toJson(detailsList);
		} catch(Exception e){
			e.printStackTrace();
		}
		return response;
	}
	
	@RequestMapping(value="/addDetails", method=RequestMethod.POST)
	public @ResponseBody String addDetails(@RequestBody RestDto restDto){
		String response = "ERROR";
		try{
			boolean result = restDao.addDetails(restDto);
			response = new GsonBuilder().disableHtmlEscaping().create().toJson(result);
		} catch(Exception e){
			e.printStackTrace();
		}
		return response;
	}
	
	@RequestMapping(value="/updateDetails", method=RequestMethod.POST)
	public @ResponseBody String updateDetails(@RequestBody RestDto restDto){
		String response = "ERROR";
		try{
			boolean result = restDao.updateDetails(restDto);
			response = new GsonBuilder().disableHtmlEscaping().create().toJson(result);
		} catch(Exception e){
			e.printStackTrace();
		}
		return response;
	}
	
	@RequestMapping(value="/deleteDetails", method=RequestMethod.POST)
	public @ResponseBody String deleteDetails(@RequestBody RestDto restDto){
		String response = "ERROR";
		try{
			boolean result = restDao.deleteDetails(restDto);
			response = new GsonBuilder().disableHtmlEscaping().create().toJson(result);
		} catch(Exception e){
			e.printStackTrace();
		}
		return response;
	}

}
