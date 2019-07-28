package com.mamiko.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.Parameter;
import com.mamiko.dao.ParametersMapper;
import com.mamiko.service.ParametersService;

/**
 * Implementation class of {@link ParametersService}.
 *
 * @author jérôme Dhersin
 */
@Service("parametersService")
@Transactional
public class ParametersServiceImpl implements ParametersService {
	
	@Autowired
	private ParametersMapper parametersMapper;

	@Override
	public List<Parameter> findAll() {
		return parametersMapper.findAll();
	}

	@Override
	public Parameter findById(String parameterCode) {
		return parametersMapper.find(parameterCode);
	}

	@Override
	public Long save(Parameter parameter) {
		return parametersMapper.insert(parameter);
	}

	@Override
	public Long update(Parameter parameter) {
		return parametersMapper.update(parameter);
	}

	@Override
	public Long delete(String parameterCode) {
		return parametersMapper.delete(parameterCode);
	}
}
