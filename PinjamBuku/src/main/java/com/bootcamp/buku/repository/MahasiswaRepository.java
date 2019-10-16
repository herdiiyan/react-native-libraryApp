package com.bootcamp.buku.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.buku.entity.Mahasiswa;

public interface MahasiswaRepository extends JpaRepository<Mahasiswa, String> {

	@Query(value = "select a from Mahasiswa a", countQuery = "select count(a) from Mahasiswa a")
	Page<Mahasiswa> findPage(Pageable pageable);
	
	Mahasiswa findByNama(String nama);
}