'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function ScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,      // aktifkan smoothing scroll wheel
      smoothTouch: false,     // bisa true kalau mau smoothing di touchscreen
      lerp: 0.08,             // intensitas smoothing (0..1)
      wheelMultiplier: 0.9,   // sensitifitas scroll wheel
    });

    // Loop animasi manual
    let rafId: number;
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
