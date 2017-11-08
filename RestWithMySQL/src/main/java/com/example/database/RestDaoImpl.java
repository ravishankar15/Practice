package com.example.database;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


@Repository
public class RestDaoImpl extends AbstractBaseDao implements RestDao{
	
	/*@Autowired
	private JdbcTemplate jdbcTemplate;*/
	
	@Override
	public List<RestDto> getDetails() throws Exception {
		String sql = "SELECT * FROM CUSTOMER";
		List<RestDto> detailsList = jdbcTemplate.query(sql, new Object[]{}, new RowMapper<RestDto>(){

			@Override
			public RestDto mapRow(ResultSet rs, int rowNum) throws SQLException {
				RestDto dto = new RestDto();
				try{
					dto.setId(rs.getString("ID"));
					dto.setName(rs.getString("NAME"));
					dto.setAddress(rs.getString("ADDRESS"));
					dto.setEmail(rs.getString("EMAIL"));
					dto.setPhone(rs.getString("PHONE"));
				}catch (Exception e) {
					e.printStackTrace();
				}
				return dto;
			}
			
		});
		return detailsList;
	}

	@Override
	public boolean addDetails(RestDto restDto) throws Exception {
		String sql = "INSERT INTO CUSTOMER(ID, NAME, ADDRESS, EMAIL, PHONE) "
				+ "VALUES('"+restDto.getId()+"',"+"'"+restDto.getName()+"',"
				+"'"+restDto.getAddress()+"',"+"'"+restDto.getEmail()+"',"
				+"'"+restDto.getPhone()+"')";
		int rowNum = jdbcTemplate.update(sql.toString());
		return rowNum > 0 ? true : false;
	}

	@Override
	public boolean updateDetails(RestDto restDto) throws Exception {
		String sql = "UPDATE CUSTOMER SET NAME='"+restDto.getName()+"',"
				+ " ADDRESS="+"'"+restDto.getAddress()+"', EMAIL="+"'"+restDto.getEmail()+"', "
						+ " PHONE="+"'"+restDto.getPhone()+"'"+" WHERE ID='"+restDto.getId()+"'";
		int rowNum = jdbcTemplate.update(sql.toString());
		return rowNum > 0 ? true : false;
	}

	@Override
	public boolean deleteDetails(RestDto restDto) throws Exception {
		String sql = "DELETE FROM CUSTOMER WHERE ID='"+restDto.getId()+"'";
		int rowNum = jdbcTemplate.update(sql.toString());
		return rowNum > 0 ? true : false;
	}

}
