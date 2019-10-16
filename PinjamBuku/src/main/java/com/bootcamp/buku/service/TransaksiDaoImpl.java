package com.bootcamp.buku.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.bootcamp.buku.dto.TransaksiDto;
import com.bootcamp.buku.entity.Buku;
import com.bootcamp.buku.entity.Mahasiswa;
import com.bootcamp.buku.entity.TransaksiPinjamBuku;
import com.bootcamp.buku.repository.BukuRepository;
import com.bootcamp.buku.repository.MahasiswaRepository;
import com.bootcamp.buku.repository.TransaksiRepository;

public class TransaksiDaoImpl implements TransaksiDao {

	@Autowired
	private TransaksiRepository repo;
	
	@Autowired
	private BukuRepository bukuRepo;
	
	@Autowired
	private MahasiswaRepository mhsRepo;
	
	@Transactional
	@Override
	public TransaksiPinjamBuku beliBuku(TransaksiDto transaksiDto) throws Exception {
		try {
			Mahasiswa mhs = mhsRepo.findByNama(transaksiDto.getNama());
			Buku buku = bukuRepo.findByJudul(transaksiDto.getJudul());
			TransaksiPinjamBuku transaksi = new TransaksiPinjamBuku();
			if (buku == null) {
				throw new Exception("Buku not found.");
			}
			
			if (mhs == null) {
				throw new Exception("Mahasiswa not found.");
			}
			
			if (buku.getStok() < transaksiDto.getJmlPinjam()){
				throw new Exception("Stok habis.");
			} 
						
			buku.setStok(buku.getStok() - transaksiDto.getJmlPinjam());
			transaksi.setBuku(buku);
			transaksi.setMahasiswa(mhs);
			transaksi.setTanggalPinjam(transaksiDto.getTanggalPinjam());
			transaksi.setTanggalKembali(transaksiDto.getTanggalKembali());
			transaksi.setDenda(transaksiDto.getDenda());
			transaksi.setStatus(transaksiDto.getStatus());
			transaksi.setJmlPinjam(transaksiDto.getJmlPinjam());
			repo.save(transaksi);
			
			return transaksi;
		} catch (Exception e){
			throw e;
		}	
	}

	@Override
	public List<TransaksiPinjamBuku> getTransaksi() throws Exception {
		return repo.findAll();
	}

}
