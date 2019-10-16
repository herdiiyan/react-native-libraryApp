package com.bootcamp.buku.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.bootcamp.buku.entity.Buku;
import com.bootcamp.buku.repository.BukuRepository;

public class BukuDaoImpl implements BukuDao {

	@Autowired
	private BukuRepository bukuRepository;

	@Override
	public Buku getId(String id) throws Exception {
		Optional<Buku> m = bukuRepository.findById(id);

		if (m.isPresent()) {
			return m.get();
		} else {
			throw new Exception("Id Tidak Ditemukan");
		}
	}

	@Override
	public List<Buku> getAllBuku() throws Exception {
		return bukuRepository.findAll();
	}

	@Override
	public Buku addBuku(Buku tmbBuku) throws Exception {
		Optional<Buku> opBuku = bukuRepository.findById(tmbBuku.getId());
		if (opBuku.isPresent()) {
			throw new Exception("Id Sudah digunakan");
		}
		return bukuRepository.save(tmbBuku);
	}

	@Override
	public Buku updateBook(String id, Buku buku) throws Exception {
		try {
			if (id == null) {
				throw new Exception("Data Tidak Terdaftar");
			}
			Buku update = bukuRepository.getOne(id);
			update.setJudul(buku.getJudul());
			update.setPenerbit(buku.getPenerbit());
			update.setDenda(buku.getDenda());
			update.setStok(buku.getStok());

			return bukuRepository.save(update);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}

	@Override
	public String delete(String id) throws Exception {
		Optional<Buku> bukuopt;
		String response = "Book Delete";
		try {
			bukuopt= bukuRepository.findById(id);
			if (bukuopt.isPresent()) {
			Buku buku = bukuopt.get();
			bukuRepository.delete(buku);
			} else {
				throw new Exception("Book Not fount");
			}
		} catch (Exception e) {
			throw new Exception("Gagal");
		}
		return response;
	}

	@Override
	public Page<Buku> findPage(int page) throws Exception {
		Pageable pageable = new PageRequest(page, 5);
		Page<Buku> paging = bukuRepository.findPage(pageable);
		return paging;
	}

}
