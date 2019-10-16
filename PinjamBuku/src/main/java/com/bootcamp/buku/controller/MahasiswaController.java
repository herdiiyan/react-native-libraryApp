package com.bootcamp.buku.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.buku.service.MahasiswaDao;
import com.bootcamp.buku.util.CommonResponseGenerator;
import com.bootcamp.buku.util.JsonUtil;
import com.bootcamp.buku.util.CommonResponse;
import com.bootcamp.buku.entity.Mahasiswa;


@RequestMapping("/mahasiswa")
@RestController
public class MahasiswaController {
	
	@Autowired
	MahasiswaDao mahasiswaDao;
	
	@Autowired
	CommonResponseGenerator comGen;
	
	@GetMapping("/{id}")
	public CommonResponse<Mahasiswa> getId(@PathVariable(value = "id")String id) throws Exception {
		CommonResponse<Mahasiswa> resultMahasiswa = null;
		try {
			Mahasiswa result = mahasiswaDao.getId(id);	
			resultMahasiswa = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultMahasiswa = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		
		return resultMahasiswa;
		
	}
	
	@GetMapping("mhsAll")
	public String getAllBuku() throws Exception {
		CommonResponse<List<Mahasiswa>> resultMahasiswa = null;
		try {
			List<Mahasiswa> result = mahasiswaDao.getAllMahasiswa();
			resultMahasiswa = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultMahasiswa = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return JsonUtil.generateJson(resultMahasiswa);


	}
	
	@PostMapping("")
	public String addBuku(@RequestBody Mahasiswa mahasiswa) throws Exception {
		CommonResponse<Mahasiswa> resultMahasiswa = null;
		try {
			Mahasiswa result = mahasiswaDao.addMahasiswa(mahasiswa);
			resultMahasiswa = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultMahasiswa = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return JsonUtil.generateJson(resultMahasiswa);
	}
	
	@PutMapping("/{id}")
	@Transactional
	public String updateBook(@PathVariable(value = "id") String id, @RequestBody Mahasiswa buku) throws Exception {
		CommonResponse<Mahasiswa> resultBuku = null;
		try {
			Mahasiswa result = mahasiswaDao.updateMahasiswa(id, buku);
			resultBuku = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultBuku = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return JsonUtil.generateJson(resultBuku);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable(value = "id") String id) throws Exception{
			mahasiswaDao.delete(id);
	}

	@GetMapping("/page")
	public String getPage(@RequestParam(name = "page", defaultValue = "0") int page) throws Exception {
		Page<Mahasiswa> paging = mahasiswaDao.findPage(page);
		CommonResponse<Page<Mahasiswa>> resultPage = comGen.generateCommonResponse(paging);
		return JsonUtil.generateJson(resultPage);
	}
}
