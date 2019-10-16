package com.bootcamp.buku.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.buku.entity.TransaksiPinjamBuku;

public interface TransaksiRepository extends JpaRepository<TransaksiPinjamBuku, String>{

}
