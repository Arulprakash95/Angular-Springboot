package com.ps.handler;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ps.exception.PropertyNotFoundException;
import com.ps.model.ErrorResponse;


@ControllerAdvice
public class CommonExceptionHandler {

	@ExceptionHandler(PropertyNotFoundException.class)
	public ResponseEntity<?> handleBookNotFoundException(PropertyNotFoundException e) {
		ErrorResponse error = new ErrorResponse(500, e.getClass().toString(), e.getMessage(), null, LocalDateTime.now());
//		return error;
		return new ResponseEntity<ErrorResponse>(error, HttpStatus.BAD_REQUEST);
	}

	
}
