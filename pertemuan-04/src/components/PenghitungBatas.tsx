// TODO(Level 6): beri tipe props yang benar — { min: number; max: number }.
// Angka dimulai dari min, ditampilkan sebagai "Nilai: {angka}", dengan tombol
// "+" dan "-". Tombol "+" harus disabled saat angka sudah = max, tombol "-"
// harus disabled saat angka sudah = min.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react';

export function PenghitungBatas(props: { min: number; max: number }) {
  const [angka, setAngka] = useState(props.min);
  
  const tambah = () => {
    if (angka < props.max) {
      setAngka(angka + 1);
    }
  };

  const kurangi = () => {
    if (angka > props.min) {
      setAngka(angka - 1);
    }
  };

  return (
    <div>
      <p>Nilai: {angka}</p>
      <button onClick={tambah} disabled={angka >= props.max}>
        +
      </button>
      <button onClick={kurangi} disabled={angka <= props.min}>
        -
      </button>
    </div>
  );
}
