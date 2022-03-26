export const PELABUHAN = [
  {
    pelabuhan_id: 'p1',
    pelabuhan_nama: 'merak',
    pelabuhan_lokasi: 'jakarta',
  },
  {
    pelabuhan_id: 'p2',
    pelabuhan_nama: 'bakauheni',
    pelabuhan_lokasi: 'lampung',
  },
  {
    pelabuhan_id: 'p3',
    pelabuhan_nama: 'merak1',
    pelabuhan_lokasi: 'jakarta',
  },
  {
    pelabuhan_id: 'p4',
    pelabuhan_nama: 'merak2',
    pelabuhan_lokasi: 'jakarta',
  },
  {
    pelabuhan_id: 'p5',
    pelabuhan_nama: 'merak3',
    pelabuhan_lokasi: 'jakarta',
  },
];

export const LAYANAN = [
  {
    layanan_id: 'l1',
    layanan_nama: 'Express',
    layanan_harga: 'Rp 65.000',
  },
  {
    layanan_id: 'l2',
    layanan_nama: 'VIP',
    layanan_harga: 'Rp 75.000',
  },
];

export let TIKET = [
  {
    tiket_id: '1',
    pelabuhan_awal_id: 'p1',
    pelabuhan_tujuan_id: 'p2',
    layanan_id: 'l1',
    tgl_masuk: 'friday, 23 03 2022',
    jam_masuk: '19:40',
    nama_lengkap: 'bagas',
    identitas: 'laki',
    umur: '21',
    status: 'aktif',
  },
  {
    tiket_id: '2',
    pelabuhan_awal_id: 'p1',
    pelabuhan_tujuan_id: 'p2',
    layanan_id: 'l1',
    tgl_masuk: 'friday, 23 03 2022',
    jam_masuk: '19:40',
    nama_lengkap: 'bagas',
    identitas: 'laki',
    umur: '21',
    status: 'aktif',
  },
  {
    tiket_id: '3',
    pelabuhan_awal_id: 'p1',
    pelabuhan_tujuan_id: 'p2',
    layanan_id: 'l1',
    tgl_masuk: 'friday, 23 03 2022',
    jam_masuk: '19:40',
    nama_lengkap: 'bagas',
    identitas: 'laki',
    umur: '21',
    status: 'batal',
  },
];

export const PEMBATALAN = [
  {
    tiket_id: '',
  },
];
