package com.project.onlinesupermarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class OnlinesupermarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinesupermarketApplication.class, args);
	}
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "Worlgdfvdfvhfd") String name) {
	return String.format("Heollo %s!", name);
	}

}
