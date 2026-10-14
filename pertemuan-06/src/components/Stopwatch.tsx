// TODO(Level 5): komponen TANPA props. Render teks "{detik} detik" (mulai
// 0) dan satu tombol yang bertuliskan "Start" saat berhenti dan "Stop"
// saat berjalan. Selagi berjalan, detik bertambah tiap 1 detik. Saat
// di-Stop, timer HARUS benar-benar berhenti (tidak ada timer tersisa);
// Start lagi melanjutkan dari angka terakhir. Gunakan state `jalan` sebagai
// dependency efek.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react";

export function Stopwatch() {
  const [detik, setDetik] = useState<number>(0);
  const [jalan, setJalan] = useState<boolean>(false);

  useEffect(() => {
    if (!jalan) {
      return;
    }

    const intervalId = setInterval(() => {
      setDetik((d) => d + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [jalan]);

  return (
    <div>
      <p>{detik} detik</p>
      <button onClick={() => setJalan((j) => !j)}>
        {jalan ? "Stop" : "Start"}
      </button>
    </div>
  );
}