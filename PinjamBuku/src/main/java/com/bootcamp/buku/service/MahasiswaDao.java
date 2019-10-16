package com.bootcamp.buku.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.bootcamp.buku.entity.Buku;
import com.bootcamp.buku.entity.Mahasiswa;

public interface MahasiswaDao {
	
	Mahasiswa getId(String id) throws Exception;
	
	List<Mahasiswa> getAllMahasiswa() throws Exception;
	
	Mahasiswa addMahasiswa(Mahasiswa mahasiswa) throws Exception;
	
	Mahasiswa updateMahasiswa(String id, Mahasiswa buku) throws Exception;

	void delete(String id) throws Exception;

	Page<Mahasiswa> findPage(int page) throws Exception;

}
