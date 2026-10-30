import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

// Test 1 (Bawaan): Rute tidak dikenal menampilkan 404.
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

// Test 2: Halaman Tentang menampilkan informasi nama atau judul
test('halaman tentang dapat dirender dan menampilkan judul Tentang', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tentang' })).toBeInTheDocument()
})

// Test 3: Halaman statistik menampilkan heading statistik
test('halaman statistik menampilkan judul statistik', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', {name: 'Statistik'})).toBeInTheDocument()
})

// Test 4: Halaman Tambah menampilkan formulir penambahan film
test('halaman tambah menampilkan form dan tombol simpan', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('button', { name: /simpan/i })).toBeInTheDocument
})

// Test 5: Layout menampilkan brand VANZFLIX pada navbar
test('navbar menampilkan brand VANZFLIX', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText(/VANZFLIX/i)).toBeInTheDocument()
})