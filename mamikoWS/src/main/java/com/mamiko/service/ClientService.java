package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.Client;

public interface ClientService {

	List<Client> findAll();
	
	Client findById(Integer userId);
	
    Long save( final Client user );
    
    Long update( final Client user );
    
    Long delete( final Integer userId );

}
