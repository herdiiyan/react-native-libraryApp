package com.bootcamp.buku.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.bootcamp.buku.entity.Mahasiswa;
import com.bootcamp.buku.repository.MahasiswaRepository;

public class MahasiswaDaoImpl implements MahasiswaDao {

	@Autowired
	private MahasiswaRepository mahasiswaRepository;

	@Override
	public Mahasiswa getId(String id) throws Exception {
		Optional<Mahasiswa> m = mahasiswaRepository.findById(id);

		if (m.isPresent()) {
			return m.get();
		} else {
			throw new Exception("Id Tidak Ditemukan");
		}
	}

	@Override
	public List<Mahasiswa> getAllMahasiswa() throws Exception {
		return mahasiswaRepository.findAll();
	}

	@Override
	public Mahasiswa addMahasiswa(Mahasiswa mahasiswa) throws Exception {
		Optional<Mahasiswa> opMahasiswa = mahasiswaRepository.findById(mahasiswa.getId());
		if (opMahasiswa.isPresent()) {
			throw new Exception("Id Sudah digunakan");
		}
		return mahasiswaRepository.save(mahasiswa);
	}

	@Override
	public Mahasiswa updateMahasiswa(String id, Mahasiswa mahasiswa) throws Exception {
		try {
			if (id == null) {
				throw new Exception("Data Tidak Terdaftar");
			}
			Mahasiswa update = mahasiswaRepository.getOne(id);
			update.setNama(mahasiswa.getNama());
			update.setNik(mahasiswa.getNim());

			return mahasiswaRepository.save(update);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}

	@Override
	public void delete(String id) throws Exception {
		try {
			if (id != null) {
				mahasiswaRepository.deleteById(id);
				throw new Exception("Succes");
			}
		} catch (Exception e) {
			throw e;
		}
	}

	@Override
	public Page<Mahasiswa> findPage(int page) throws Exception {
		Pageable pageable = new PageRequest(page, 5);
		Page<Mahasiswa> paging = mahasiswaRepository.findPage(pageable);
		return paging;
	}

}
