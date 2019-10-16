package com.bootcamp.buku.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.bootcamp.buku.entity.Buku;


public interface BukuDao {
	
	List<Buku> getAllBuku() throws Exception;
	
	Buku addBuku(Buku tmbBuku) throws Exception;
	
	Buku updateBook(String id, Buku buku) throws Exception;
	
	Buku getId(String id) throws Exception;
	
	String delete(String id) throws Exception;
	
	Page<Buku> findPage(int page) throws Exception;
}
