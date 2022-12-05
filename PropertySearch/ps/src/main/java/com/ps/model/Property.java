package com.ps.model;

import javax.persistence.*;
@Entity
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstname;
	private String lastname;
	private String propertyname;
	private String type;
	private String address;
	private String legaldesc;
	private long taxamount;
	private int taxstatus;
	private String escrowaccount;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}



	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}



	public String getLastname() {
		return lastname;
	}



	public void setLastname(String lastname) {
		this.lastname = lastname;
	}



	public String getPropertyname() {
		return propertyname;
	}



	public void setPropertyname(String propertyname) {
		this.propertyname = propertyname;
	}



	public String getType() {
		return type;
	}



	public void setType(String type) {
		this.type = type;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getLegaldesc() {
		return legaldesc;
	}



	public void setLegaldesc(String legaldesc) {
		this.legaldesc = legaldesc;
	}



	public long getTaxamount() {
		return taxamount;
	}



	public void setTaxamount(long taxamount) {
		this.taxamount = taxamount;
	}



	public int getTaxstatus() {
		return taxstatus;
	}



	public void setTaxstatus(int taxstatus) {
		this.taxstatus = taxstatus;
	}



	public String getEscrowaccount() {
		return escrowaccount;
	}



	public void setEscrowaccount(String escrowaccount) {
		this.escrowaccount = escrowaccount;
	}



	public Property(String firstname, String lastname, String propertyname, String type, String address,
			String legaldesc, long taxamount, int taxstatus, String escrowaccount) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.propertyname = propertyname;
		this.type = type;
		this.address = address;
		this.legaldesc = legaldesc;
		this.taxamount = taxamount;
		this.taxstatus = taxstatus;
		this.escrowaccount = escrowaccount;
	}

	public Property(int id, String firstname, String lastname, String propertyname, String type, String address,
			String legaldesc, long taxamount, int taxstatus, String escrowaccount) {
		this(firstname,lastname,propertyname,type,address,legaldesc,taxamount,taxstatus,escrowaccount);
		this.id = id;		
	}

	public Property() {
		super();
		// TODO Auto-generated constructor stub
	}



	@Override
	public String toString() {
		return "Property [firstname=" + firstname + ", lastname=" + lastname + ", propertyname=" + propertyname
				+ ", type=" + type + ", address=" + address + ", legaldesc=" + legaldesc + ", taxamount=" + taxamount
				+ ", taxstatus=" + taxstatus + ", escrowaccount=" + escrowaccount + "]";
	}
	
	
	

}
