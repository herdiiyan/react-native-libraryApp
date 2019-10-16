package com.bootcamp.buku;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bootcamp.buku.service.BukuDao;
import com.bootcamp.buku.service.BukuDaoImpl;
import com.bootcamp.buku.service.MahasiswaDao;
import com.bootcamp.buku.service.MahasiswaDaoImpl;
import com.bootcamp.buku.service.TransaksiDao;
import com.bootcamp.buku.service.TransaksiDaoImpl;
import com.bootcamp.buku.util.CommonResponseGenerator;

@Configuration
public class DaoSpringConfig {
	
	@Bean
	public BukuDao buku() {
		return new BukuDaoImpl();
	}

	@Bean
	public MahasiswaDao mahasiswa() {
		return new MahasiswaDaoImpl();
	}
	
	@Bean
	public TransaksiDao transaksi() {
		return new TransaksiDaoImpl();
	}
	
	@Bean
	public CommonResponseGenerator comGen() {
		return new CommonResponseGenerator();
	}
}
