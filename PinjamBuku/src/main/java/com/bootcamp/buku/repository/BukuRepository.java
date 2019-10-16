package com.bootcamp.buku.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.buku.entity.Buku;

public interface BukuRepository extends JpaRepository<Buku, String> {
	
	@Query(value = "select a from Buku a", countQuery = "select count(a) from Buku a")
	Page<Buku> findPage(Pageable pageable);
	
	Buku findByJudul(String judul);
	
}