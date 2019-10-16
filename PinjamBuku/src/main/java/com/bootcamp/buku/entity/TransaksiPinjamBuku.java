package com.bootcamp.buku.entity;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;

@Table(name = "trans_perpus")
@Entity
public class TransaksiPinjamBuku {

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_mahasiswa")
	private Mahasiswa mahasiswa;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_buku")
	private Buku buku;
	@JsonFormat(pattern = "dd-MM-yyyy")
    private Date tanggalPinjam;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date tanggalKembali;
    private double denda;
    private String status;
    @Column(name = "jml_pinjam")
	private int jmlPinjam;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Mahasiswa getMahasiswa() {
		return mahasiswa;
	}
	public void setMahasiswa(Mahasiswa mahasiswa) {
		this.mahasiswa = mahasiswa;
	}
	public Buku getBuku() {
		return buku;
	}
	public void setBuku(Buku buku) {
		this.buku = buku;
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