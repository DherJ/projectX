package com.biocouture.service;

import java.util.List;

import com.biocouture.bo.User;

public interface UserService {

	List<User> findAll();
	
	User findById(Integer userId);
	
    Long save( final User user );
    
    Long update( final User user );
    
    Long delete( final Integer userId );

}
