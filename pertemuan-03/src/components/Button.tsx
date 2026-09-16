// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
export function Button(props: { variant: 'primary' | 'secondary' | 'danger'; children: React.ReactNode; onClick?: () => void }) {
  let buttonClass = "";

  switch (props.variant) {
    case 'primary':
      buttonClass = "bg-teal-500 hover:bg-teal-700 text-black";
      break;
    case 'secondary':
      buttonClass = "bg-amber-500 hover:bg-amber-700 text-black";
      break;
    case 'danger':
      buttonClass = "bg-pink-500 hover:bg-pink-700 text-black";
      break;
  }

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
