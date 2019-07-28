package com.mamiko.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.Client;
import com.mamiko.dao.ClientMapper;
import com.mamiko.service.ClientService;

/**
 * Implementation class of {@link ClientService}.
 *
 * @author jérôme Dhersin
 */
@Service("clientService")
@Transactional
public class ClientServiceImpl implements ClientService {
	
	@Autowired
	private ClientMapper clientMapper;

	@Override
	public List<Client> findAll() {
		return this.clientMapper.findAll();
	}

	@Override
	public Client findById(Integer clientId) {
		return this.clientMapper.find(clientId);
	}
	
	@Override
	public Long save(Client client) {
		return this.clientMapper.insert(client);
	}

	@Override
	public Long update(Client client) {
		return this.clientMapper.update(client);
	}

	@Override
	public Long delete(Integer clientId) {
		return this.clientMapper.delete(clientId);
	}

}
