package com.bootcamp.buku.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TransaksiDto {
	
	private String nama;
    private String judul;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date tanggalPinjam;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date tanggalKembali;
    private double denda;
    private String status;
    private int jmlPinjam;
    
	public String getNama() {
		return nama;
	}
	public void setNama(String nama) {
		this.nama = nama;
	}
	public String getJudul() {
		return judul;
	}
	public void setJudul(String judul) {
		this.judul = judul;
	}
	public Date getTanggalPinjam() {
		return tanggalPinjam;
	}
	public void setTanggalPinjam(Date tanggalPinjam) {
		this.tanggalPinjam = tanggalPinjam;
	}
	public Date getTanggalKembali() {
		return tanggalKembali;
	}
	public void setTanggalKembali(Date tanggalKembali) {
		this.tanggalKembali = tanggalKembali;
	}
	public double getDenda() {
		return denda;
	}
	public void setDenda(double denda) {
		this.denda = denda;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getJmlPinjam() {
		return jmlPinjam;
	}
	public void setJmlPinjam(int jmlPinjam) {
		this.jmlPinjam = jmlPinjam;
	}
}
