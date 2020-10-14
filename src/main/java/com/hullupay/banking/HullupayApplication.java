package com.hullupay.banking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HullupayApplication {

	public static void main(String[] args) {
		SpringApplication.run(HullupayApplication.class, args);
	}
	
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
	return "Hello Well come to Hullupay Sysyem this is day one activity Repo created,application Pushed to the repo and deploid on the sytem thanks Heroku you are life saver";
	}

}
