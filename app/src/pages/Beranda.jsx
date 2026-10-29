import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className='hero-kaca'>
      <div className='badge-tema'>Tema: {mahasiswa.tema}</div>
      <h1 className='hero-judul'>Daftar Tontonan Film dan Serial</h1>

      {loading ? (
        <p className='hero-loading'>Memuat Tontonan...</p>
      ) : (
        <>
        <p className='hero-deskripsi'>
          Katalog terlengkap untuk melacak tontonan favoritmu. Saat ini tersedia{' '}
          <span className="sorot">{items.length} Tontonan</span> dalam{' '}
          <span className="sorot">{jumlahKategori} Kategori</span>
        </p>
        <div className="hero-aksi">
          <Link to="/koleksi" className='tombol-cta'>
          Jelajahi Koleksi Film &rarr;
          </Link>
        </div>
        </>
      )}
    </section>
  )
}