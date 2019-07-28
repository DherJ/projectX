package com.mamiko.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mamiko.bo.Client;
import com.mamiko.service.ClientService;

@RestController
@RequestMapping("/clients")
public class ClientController {

	@Autowired
	private ClientService clientService;

	private static String administratorMail;
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public List<Client> getAll() {
		System.out.println(ClientController.administratorMail);
		return this.clientService.findAll();
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Client getClientById(@PathVariable("id") Integer userId) {
		return this.clientService.findById(userId);
	}

	@CrossOrigin(origins = "*")
    @PostMapping(value="/", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long saveClient(@RequestBody Client client) {
		return this.clientService.save(client);
	}
	
	@CrossOrigin(origins = "*")
    @PutMapping(value="/", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long updateClient(@RequestBody Client client) {
		return this.clientService.update(client);
	}
	
	@CrossOrigin(origins = "*")
    @DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long deleteClient(@PathVariable("id") Integer clientId) {
		return this.clientService.delete(clientId);
	}
	
	@Value("${administrator.mail}")
    public void setAdministratorMail(String value) {
		ClientController.administratorMail = value;
    }
	
}