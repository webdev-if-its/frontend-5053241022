// TODO(Level 8): beri tipe props yang benar — { judul: string; children: ReactNode }
// (impor tipe ReactNode dari 'react'). Render <section> berisi judul (mis.
// di <h3>) DAN {children} di dalamnya. Lihat SOAL.md untuk kontrak lengkap.
export function Panel(props: { judul: string; children: React.ReactNode }) {
  return <section>
    <h3>{props.judul}{props.children}</h3>
  </section>
}
