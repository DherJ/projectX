package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.Parameter;

public interface ParametersService {

	List<Parameter> findAll();
	
	Parameter findById( String parameterCode );
	
    Long save( final Parameter parameter );
    
    Long update( final Parameter parameter );
    
    Long delete( final String parameterCode );

}
