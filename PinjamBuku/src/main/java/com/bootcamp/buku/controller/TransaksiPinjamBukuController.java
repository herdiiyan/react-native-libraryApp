package com.bootcamp.buku.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.buku.dto.TransaksiDto;
import com.bootcamp.buku.entity.TransaksiPinjamBuku;
import com.bootcamp.buku.service.TransaksiDao;
import com.bootcamp.buku.util.CommonResponse;
import com.bootcamp.buku.util.CommonResponseGenerator;

@RestController
public class TransaksiPinjamBukuController {

	private static final String TRANSACTION_ADDR = "trx/save";
	private static final String TRANSACTION_GET = "trx";
	
	@Autowired
	private TransaksiDao transaksiDao;

	@Autowired
	private CommonResponseGenerator comGen;

	@PostMapping(TRANSACTION_ADDR)
	public CommonResponse<TransaksiPinjamBuku> beliBuku(@RequestBody TransaksiDto transaksiDto) throws Exception {
		CommonResponse<TransaksiPinjamBuku> resultTransaksi = null;
		try {
			TransaksiPinjamBuku result = transaksiDao.beliBuku(transaksiDto);	
			resultTransaksi = comGen.generateCommonResponse(result);
		} catch (Exception e) {
			resultTransaksi = comGen.generateCommonResponse("401", e.getMessage(), null);
		}
		return resultTransaksi;
	}
	
	@GetMapping(TRANSACTION_GET)
	public List<TransaksiPinjamBuku> getTransaksi() throws Exception {
		return transaksiDao.getTransaksi();
	}
	
//	@ExceptionHandler
//	public CommonResponse<String> exception(Exception ex) throws Exception {
//
//		CommonResponse<String> resp = 
//				comGen.generateCommonResponse("X01", ex.getMessage(), String.class);
//
//		return resp;
//	}

}