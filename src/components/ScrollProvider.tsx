'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function ScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      // 'smooth' sudah dihapus di Lenis v1
      smoothWheel: true,     // smoothing untuk wheel
      smoothTouch: false,    // set true jika mau smoothing di touch
      lerp: 0.08,            // 0..1 (lebih kecil = lebih halus)
      wheelMultiplier: 0.9,  // sensitivitas scroll
      // autoRaf: true,      // kalau true, hapus loop RAF manual di bawah
    });

    // RAF loop manual
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
