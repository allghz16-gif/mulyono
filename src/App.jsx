import React from 'react';
import './App.css';

function App() {
  // --- SILAKAN EDIT DATA DI BAWAH INI ---
  const profileData = {
    namaLengkap: "Dhika Pradana", // Ganti nama kamu
    kelas: "TI-PBO-01",           // Ganti kelas kamu
    prodi: "Teknik Informatika",  // Ganti prodi kamu
    domisili: "Jakarta Selatan",   // Ganti domisili kamu
    // Pastikan teks di bawah ini lebih dari 100 kata
    deskripsi: "Saya adalah seorang mahasiswa Teknik Informatika yang memiliki ketertarikan mendalam pada dunia pengembangan perangkat lunak dan analisis data. Motivasi utama saya dalam memilih bidang ini adalah keinginan untuk memahami bagaimana teknologi dapat mempermudah kehidupan manusia sehari-hari. Selama masa perkuliahan, saya aktif mempelajari berbagai bahasa pemrograman seperti JavaScript, serta mendalami framework modern seperti ReactJS. Saya percaya bahwa belajar pemrograman bukan hanya soal menulis kode, tetapi juga tentang cara berpikir logis dan sistematis dalam memecahkan sebuah masalah yang kompleks. Proyek profil ini merupakan langkah awal saya dalam mengimplementasikan konsep-konsep pengembangan web yang telah saya pelajari di kelas Pemrograman Berorientasi Objek. Selain kegiatan akademik, saya juga senang mengikuti perkembangan tren teknologi terbaru dan berkolaborasi dalam proyek tim untuk mengasah keterampilan komunikasi serta kerja sama. Harapan saya ke depannya adalah dapat berkontribusi dalam industri digital sebagai pengembang yang handal dan inovatif, serta terus memberikan dampak positif melalui karya-karya teknologi yang saya buat bersama rekan-rekan pengembang lainnya di masa depan nanti."
  };

  // Logika menghitung jumlah kata
  const hitungKata = profileData.deskripsi.split(/\s+/).filter(Boolean).length;

  return (
    <div className="full-page">
      <div className="profile-card">
        
        {/* Banner Atas */}
        <div className="header-banner">
          <div className="banner-pattern"></div>
        </div>

        {/* Isi Profil */}
        <div className="main-content">
          <div className="profile-header">
            <h1 className="name-title">{profileData.namaLengkap}</h1>
            <p className="major-text">{profileData.prodi}</p>
            
            <div className="info-grid">
              <div className="info-item">
                <span>📚</span> {profileData.kelas}
              </div>
              <div className="info-item">
                <span>📍</span> {profileData.domisili}
              </div>
              <div className="info-item">
                <span>✅</span> Terverifikasi Mahasiswa
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Bagian Tentang Diri */}
          <div className="about-section">
            <h2 className="section-title">Tentang Diri</h2>
            <div className="about-box">
              <p>{profileData.deskripsi}</p>
              <span className="word-count-badge">
                {hitungKata} Kata (Syarat min. 100 kata terpenuhi)
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="profile-footer">
          Tugas Kelompok ReactJS • Build with Love • 2026
        </div>

      </div>
    </div>
  );
}

export default App;