import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'

const REPO = 'https://v4nzz.github.io/uts-paw'
const PORTO = 'https://ivannandira.my.id'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section className='kartu-tentang'>
      <div className='tentang-header'>
        <span className='badge-dev'>Pengembang Aplikasi</span>
        <h1>Tentang Pengembang</h1>
      </div>
      
      <dl className='tentang-list'>
        <div className='tentang-row'>
          <dt>Nama</dt>
          <dd className='sorot-nama'>{nama}</dd>
        </div>
        <div className='tentang-row'>
          <dt>NIM</dt>
          <dd>{nim}</dd>
        </div>
        <div className='tentang-row'>
          <dt>Kelas</dt>
          <dd>{kelas}</dd>
        </div>
        <div className='tentang-row'>
          <dt>Tema</dt>
          <dd>{tema}</dd>
        </div>
      </dl>

      <div className='tentang-footer'>
        <p className='repo-link'>
          Kode sumber:{' '}
          <a href={REPO} target="_blank" rel='noreferrer'>
            {REPO}
          </a>
        </p>

        <div className='tentang-aksi'>
          <a
            href={PORTO}
            target="_blank"
            rel='noreferrer'
            className='btn-porto'
          >
            Kunjungi Portofolio &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}