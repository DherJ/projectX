package com.mamiko.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.mamiko.bo.Parameter;
import com.mamiko.service.ParametersService;

@RestController
@RequestMapping("/parameters")
public class ParametersController {

	@Autowired
	private ParametersService parametersService;

	@CrossOrigin(origins = "*")
    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public List<Parameter> getAll() {
		return this.parametersService.findAll();
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/{codeParameter}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Parameter getParameterByCodeParameter(@PathVariable("codeParameter") String codeParameter) {
		return this.parametersService.findById(codeParameter);
	}

	@CrossOrigin(origins = "*")
    @PostMapping(value="/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long createParameter(@RequestBody Parameter parameter) {
		return this.parametersService.save(parameter);
	}
	
	@CrossOrigin(origins = "*")
    @PostMapping(value="/", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long updateParameter(@RequestBody Parameter parameter) {
		return this.parametersService.update(parameter);
	}
	
	@CrossOrigin(origins = "*")
    @DeleteMapping(value="/{codeParameter}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long deleteParameter(@PathVariable("codeParameter") String codeParameter) {
		return this.parametersService.delete(codeParameter);
	}
	
}