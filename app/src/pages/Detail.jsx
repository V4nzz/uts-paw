import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
  if (!item) {
    return (
      <section className='kartu-detail'>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke daftar</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm('Hapus "${item.judul}"?')) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }
  
  return (
    <section className='kartu-detail'>
      <div className='detail-header'>
        <span className='badge-kategori'>{item.kategori}</span>
        <h1 className='detail-judul'>{item.judul}</h1>
      </div>
      
      <dl className='detail-list'>
        <div className='detail-row'>
          <dt>Sutradara</dt>
          <dd>{item.sutradara || '-'}</dd>
        </div>
        <div className='detail-row'>
          <dt>Tahun Rilis</dt>
          <dd>{item.tahunRilis || '-'}</dd>
        </div>
        <div className='detail-row'>
          <dt>Rating</dt>
          <dd className='detail-rating'>&#9733; {item.rating || '-'}</dd>
        </div>
      </dl>

      <div className='detail-aksi'>
        <button type='button' className='btn-hapus' onClick={konfirmasiHapus}>
          Hapus Film
        </button>
        <Link to="/koleksi" className='btn-kembali'>
          &larr; Kembali ke daftar
        </Link>
      </div>
    </section>
  )
}