import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  const filmTerbaru = [...items]
    .sort((a, b) => (b.tahunRilis || 0) - (a.tahunRilis || 0))
    .slice(0, 3)

  return (
    <section className="beranda-container">
      <div className="beranda-intro">
        <span className="label-meta">{mahasiswa.tema}</span>
        <h1 className="beranda-judul">Koleksi Tontonan Film & Serial</h1>
        <p className="beranda-sub">
          Platform kurasi personal untuk mengelola dan memantau daftar film, serial, serta riwayat rating tontonan favoritmu.
        </p>

        {loading ? (
          <p className="status-teks">Memuat data koleksi...</p>
        ) : (
          <div className="stats-strip">
            <div className="stat-box">
              <span className="stat-angka">{items.length}</span>
              <span className="stat-label">Total Judul</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-angka">{jumlahKategori}</span>
              <span className="stat-label">Kategori</span>
            </div>
          </div>
        )}

        <div className="beranda-cta-group">
          <Link to="/koleksi" className="btn-merah">
            Lihat Koleksi
          </Link>
          <Link to="/tambah" className="btn-outline">
            + Tambah Film
          </Link>
        </div>
      </div>

      <div className="beranda-spotlight">
        <h3 className="spotlight-title">Sorotan Terbaru</h3>
        {loading ? (
          <p className="status-teks">Memuat sorotan...</p>
        ) : (
          <div className="spotlight-list">
            {filmTerbaru.map((film) => (
              <Link to={`/koleksi/${film.id}`} key={film.id} className="spotlight-card">
                <div className="spotlight-info">
                  <h4>{film.judul}</h4>
                  <p>{film.kategori} &bull; {film.tahunRilis || film.tahun || 'N/A'}</p>
                </div>
                {film.rating && (
                  <span className="spotlight-rating">&#9733; {film.rating}</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
