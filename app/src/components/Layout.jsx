import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Layout.css'

const MENU = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi' },
  { ke: '/tambah', label: 'Tambah' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div className="kerangka">
      <Navbar menu={MENU} />
      <main id="konten-utama" className='isi'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}