// TODO(Level 10, bonus): beri tipe props yang benar — { judul: string;
// catatan?: string; children: ReactNode } (catatan OPSIONAL). Render:
// - judul (selalu tampil)
// - catatan (HANYA tampil kalau diberikan — jangan sampai teks "undefined"
//   ikut muncul kalau catatan tidak diisi)
// - children (selalu tampil)
// Lihat SOAL.md untuk kontrak lengkap.
export function KartuInfo(props: { judul: string; catatan?: string; children: React.ReactNode }) {
  return <div>
    <h3>{props.judul}</h3>
    {props.catatan && <p>{props.catatan}</p>}
    {props.children}
  </div>
}
