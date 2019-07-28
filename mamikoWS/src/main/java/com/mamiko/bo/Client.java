package com.mamiko.bo;

import java.io.Serializable;

public class Client implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer           id;

    private String            name;

    private String           firstName;

    private String        mail;
    
    private String        password;
    
    public Client(){}
    
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", name=" + name + ", firstName=" + firstName + ", mail=" + mail + ", password="
				+ password + "]";
	}
    
}
