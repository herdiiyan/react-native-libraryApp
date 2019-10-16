package com.bootcamp.buku.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="buku")
public class Buku {
	@Id
	private String id;
	private String judul;
	private String penerbit;
	private double denda;
	private int stok;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getJudul() {
		return judul;
	}
	public void setJudul(String judul) {
		this.judul = judul;
	}
	public String getPenerbit() {
		return penerbit;
	}
	public void setPenerbit(String penerbit) {
		this.penerbit = penerbit;
	}
	public double getDenda() {
		return denda;
	}
	public void setDenda(double denda) {
		this.denda = denda;
	}
	public int getStok() {
		return stok;
	}
	public void setStok(int stok) {
		this.stok = stok;
	}
	
}
