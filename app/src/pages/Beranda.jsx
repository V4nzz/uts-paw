import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Daftar Tontonan Film dan Serial</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat Tontonan...</p>
      ) : (
        <>
        <p>
            Ada {items.length} Tontonan dalam {jumlahKategori} Kategori.
        </p>
      <Link to="/koleksi">Lihat semua tontonan</Link>
      </>
      )}
    </section>
  )

}