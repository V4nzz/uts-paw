import useKoleksi from "../hooks/useKoleksi"
import './Statistik.css'

export default function Statistik() {
  const { items } = useKoleksi()
  const perKategori = items.reduce((hitung, { kategori }) => ({ ...hitung,[kategori]: (hitung[kategori] ?? 0) + 1 }), {})
  const total = items.length

  const entriKategori = Object.entries(perKategori)
  const kategoriTerbanyak = entriKategori.reduce((max, curr) => curr[1] > (max[1] || 0) ? curr : max, ['', 0])
  
  return (
    <section className="statistik-wadah">
      <div className="statistik-header">
        <h1>Statistik Koleksi</h1>
        <p>Distribusi dan ringkasan data tontonan berdasarkan genre</p>
      </div>
      
      <div className="metrik-grid">
        <div className="metrik-card">
          <span className="metrik-label">Total Tontonan</span>
          <span className="metrik-nilai">{total}</span>
        </div>
        <div className="metrik-card">
          <span className="metrik-label">Genre Aktif</span>
          <span className="metrik-nilai">{entriKategori.length}</span>
        </div>
        <div className="metrik-card">
          <span className="metrik-label">Genre Terbanyak</span>
          <span className="metrik-nilai sorot-genre">{kategoriTerbanyak[0] || '-'}</span>
          <span className="metrik-sub">({kategoriTerbanyak[1]} judul)</span>
        </div>
      </div>

      <div className="tabel-panel">
        <div className="tabel-gulir">
          <table className="tabel-data">
            <thead>
              <tr>
                <th>Kategori</th>
                <th style={{ width: '45%' }}>Distribusi</th>
                <th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {entriKategori.map(([kategori, jumlah]) => {
                const persentase = total > 0 ? Math.round((jumlah / total) * 100) : 0
                return (
                  <tr key={kategori}>
                    <td className="sel-kategori">{kategori}</td>
                    <td className="sel-bar">
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: `${persentase}%`}}></div>
                      </div>
                    </td>
                    <td className="sel-jumlah">
                      {jumlah} <span className="persen">({persentase}%)</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th></th>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}
