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
    pelabuhan_nama: 'Pearl Harbour',
    pelabuhan_lokasi: 'panjang',
  },
  {
    pelabuhan_id: 'p4',
    pelabuhan_nama: 'seaport',
    pelabuhan_lokasi: 'teluk',
  },
  {
    pelabuhan_id: 'p5',
    pelabuhan_nama: 'tanjung priuk',
    pelabuhan_lokasi: 'indonesia',
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
  {
    layanan_id: 'l3',
    layanan_nama: 'Business',
    layanan_harga: 'Rp 85.000',
  },
  {
    layanan_id: 'l4',
    layanan_nama: 'Executive',
    layanan_harga: 'Rp 150.000',
  },
];

export let TIKET = [
  {
    tiket_id: '1',
    pelabuhan_awal_id: 'p1',
    pelabuhan_tujuan_id: 'p5',
    layanan_id: 'l3',
    tgl_masuk: 'Saturday, 24 03 2021',
    jam_masuk: '19:40',
    nama_lengkap: 'Hendri',
    identitas: 'laki',
    umur: '21',
    status: 'aktif',
  },
  {
    tiket_id: '2',
    pelabuhan_awal_id: 'p3',
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
    layanan_id: 'l2',
    tgl_masuk: 'friday, 23 03 2022',
    jam_masuk: '19:40',
    nama_lengkap: 'bagas',
    identitas: 'laki',
    umur: '21',
    status: 'batal',
  },
  {
    tiket_id: '4',
    pelabuhan_awal_id: 'p5',
    pelabuhan_tujuan_id: 'p2',
    layanan_id: 'l3',
    tgl_masuk: 'friday, 23 03 2022',
    jam_masuk: '19:40',
    nama_lengkap: 'bagas',
    identitas: 'laki',
    umur: '21',
    status: 'aktif',
  },
  {
    tiket_id: '5',
    pelabuhan_awal_id: 'p1',
    pelabuhan_tujuan_id: 'p3',
    layanan_id: 'l4',
    tgl_masuk: 'friday, 23 03 2022',
    jam_masuk: '19:40',
    nama_lengkap: 'bagas',
    identitas: 'laki',
    umur: '21',
    status: 'aktif',
  },
];

export const PEMBATALAN = [
  {
    tiket_id: '',
  },
];
