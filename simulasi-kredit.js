function hitung() {
  // mendapatkan nilai input dari form
  const hargaProperti = parseFloat(document.getElementById('harga').value);
  const dp = parseFloat(document.getElementById('dp').value);
  const bungaTahunan = parseFloat(document.getElementById('bunga').value) / 100;
  const durasi = parseFloat(document.getElementById('durasi').value);
  const biayaNotaris = parseFloat(document.getElementById('biaya-notaris').value);
  const biayaAppraisal = parseFloat(document.getElementById('biaya-appraisal').value);
  const biayaAdmin = parseFloat(document.getElementById('biaya-admin').value);
  const biayaAsuransi = parseFloat(document.getElementById('biaya-asuransi').value) / 100;
  const biayaProvisi = parseFloat(document.getElementById('biaya-provisi').value) / 100;
  const bphtb = parseFloat(document.getElementById('bphtb').value) / 100;

  // perhitungan kredit dengan metode anuitas
  const angsuranPerBulan = (hargaProperti - dp) * (bungaTahunan / 12) /
    (1 - Math.pow(1 + bungaTahunan / 12, -durasi * 12));
  const totalAngsuran = angsuranPerBulan * durasi * 12;
  const totalDP = dp + biayaNotaris + biayaAppraisal + biayaAdmin +
    (hargaProperti * biayaAsuransi) + (hargaProperti * biayaProvisi) + (hargaProperti * bphtb);

  // menampilkan hasil perhitungan di halaman web
  document.getElementById('angsuran').innerHTML = `Angsuran per bulan: ${angsuranPerBulan.toFixed(2)}`;
  document.getElementById('total').innerHTML = `Total kredit: ${totalAngsuran.toFixed(2)}`;
  document.getElementById('total-dp').innerHTML = `Total DP dan biaya lainnya: ${totalDP.toFixed(2)}`;
}

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // mencegah form submit dan reload halaman
  hitung();
});