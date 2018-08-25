package com.biocouture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.biocouture.bo.User;
import com.biocouture.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	private static String administratorMail;
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public List<User> getAll() {
		System.out.println(this.administratorMail);
		return this.userService.findAll();
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/id/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public User getUserById(@PathVariable("id") Integer userId) {
		return this.userService.findById(userId);
	}

	@CrossOrigin(origins = "*")
    @PostMapping(value="/", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long updateUser(@RequestBody User user) {
		return this.userService.update(user);
	}
	
	@CrossOrigin(origins = "*")
    @DeleteMapping(value="/id/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long deleteUser(@PathVariable("id") Integer userId) {
		return this.userService.delete(userId);
	}
	
	@Value("${administrator.mail}")
    public void setAdministratorMail(String value) {
		administratorMail = value;
    }
	
}