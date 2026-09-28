// TODO(Level 5): beri tipe props yang benar — { awal?: number }. Simpan
// angka di useState<number> (nilai awal = props.awal, default 0) dan render
// teks "Jumlah: {angka}" plus tiga tombol: "+" (tambah 1), "-" (kurangi 1),
// "Reset" (kembali ke nilai awal).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";

export function Penghitung(props: { awal?: number }) {
  const [angka, setAngka] = useState(props.awal ?? 0);

  const tambah = () => setAngka(angka + 1);
  const kurangi = () => setAngka(angka - 1);
  const reset = () => setAngka(props.awal ?? 0);

  return (
    <div>
      <p>Jumlah: {angka}</p>
      <button onClick={tambah}>+</button>
      <button onClick={kurangi}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
