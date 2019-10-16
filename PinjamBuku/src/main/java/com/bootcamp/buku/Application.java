package com.bootcamp.buku;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@Configuration
@Import({ DaoSpringConfig.class })
@EntityScan({ "com.bootcamp.buku.entity" })
@EnableJpaRepositories({ "com.bootcamp.buku.repository" })
@ComponentScan({ "com.bootcamp.buku" })
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
