// TODO(Level 9): beri tipe props yang benar — { isi: string }. Gunakan state
// boolean: awalnya detail tersembunyi dan tombol bertuliskan "Tampilkan
// detail". Saat diklik, teks props.isi muncul dan tombol berubah jadi
// "Sembunyikan detail"; klik lagi menyembunyikannya (elemennya harus
// benar-benar hilang dari DOM).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'

export function DetailToggle({ isi }: { isi: string }) {
  const [tampil, setTampil] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setTampil(!tampil)}>
        {tampil ? 'Sembunyikan detail' : 'Tampilkan detail'}
      </button>
      {tampil && <p>{isi}</p>}
    </div>
  )
}
