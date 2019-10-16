package com.bootcamp.buku.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mhs")
public class Mahasiswa {
	@Id
	private String id;
	private String nama;
	private int nim;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNama() {
		return nama;
	}
	public void setNama(String nama) {
		this.nama = nama;
	}
	public int getNim() {
		return nim;
	}
	public void setNik(int nim) {
		this.nim = nim;
	}
	
}


