package com.ps.exception;

public class PropertyNotFoundException extends Exception {

	public PropertyNotFoundException() {}

	public PropertyNotFoundException(String message) {
		super(message);
	}
	public PropertyNotFoundException(Exception e) {
		super(e);
	}
	public PropertyNotFoundException(String message, Exception e) {
		super(message, e);
	}
	
}
