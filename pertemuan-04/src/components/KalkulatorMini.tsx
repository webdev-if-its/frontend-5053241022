// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'

export function KalkulatorMini() {
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')

  const angkaA = a === '' ? 0 : Number(a)
  const angkaB = b === '' ? 0 : Number(b)

  return (
    <div>
      <label>
        Angka A
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </label>
      <label>
        Angka B
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </label>
      <p>Hasil: {angkaA + angkaB}</p>
    </div>
  )
}
