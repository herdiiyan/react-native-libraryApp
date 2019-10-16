package com.bootcamp.buku.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.buku.entity.Buku;
import com.bootcamp.buku.service.BukuDao;
import com.bootcamp.buku.util.CommonResponse;
import com.bootcamp.buku.util.CommonResponseGenerator;

@RequestMapping(path = "/buku")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BukuController {

	@Autowired
	private BukuDao bukuDao;

	@Autowired
	private CommonResponseGenerator comGen;
	
	@GetMapping("/{id}")
	public CommonResponse<Buku> getId(@PathVariable(value = "id") String id) throws Exception {
		CommonResponse<Buku> resultBuku = null;
		try {
			Buku result = bukuDao.getId(id);
			resultBuku = comGen.generateCommonResponse(result);
			
		} catch (Exception e) {
			resultBuku = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return resultBuku;
	}

	@GetMapping("")
	public CommonResponse<List<Buku>> getAllBuku() throws Exception {
		CommonResponse<List<Buku>> resultBuku = null;
		try {
			List<Buku> result = bukuDao.getAllBuku();
			resultBuku = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultBuku = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return resultBuku;
	}

	@PostMapping("")
	public CommonResponse<Buku> addBuku(@RequestBody Buku tmbBuku) throws Exception {
		CommonResponse<Buku> resultBuku = null;
		try {
			Buku result = bukuDao.addBuku(tmbBuku);
			resultBuku = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultBuku = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return resultBuku;
	}
	
	@PutMapping("/{id}")
	public CommonResponse<Buku> updateBook(@PathVariable(value = "id") String id, @RequestBody Buku buku) throws Exception {
		CommonResponse<Buku> resultBuku = null;
		try {
			Buku result = bukuDao.updateBook(id, buku);
			resultBuku = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultBuku = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return resultBuku;
	}
	
	@DeleteMapping("/{id}")
	public CommonResponse<String> delete(@PathVariable(value = "id") String id) throws Exception{
		CommonResponse<String> resultBuku = null;
		try {
			String result = bukuDao.delete(id);
			resultBuku = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultBuku = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return resultBuku;
	}

	@GetMapping("/page")
	public CommonResponse<Page<Buku>> getPage(@RequestParam(name = "page", defaultValue = "0") int page) throws Exception {
		Page<Buku> paging = bukuDao.findPage(page);
		return comGen.generateCommonResponse(paging);
	}
}
