package com.bootcamp.buku.service;

import java.util.List;

import com.bootcamp.buku.dto.TransaksiDto;
import com.bootcamp.buku.entity.TransaksiPinjamBuku;

public interface TransaksiDao {

	TransaksiPinjamBuku beliBuku(TransaksiDto transaksiDto) throws Exception;
	
	List<TransaksiPinjamBuku> getTransaksi() throws Exception;
	
}
