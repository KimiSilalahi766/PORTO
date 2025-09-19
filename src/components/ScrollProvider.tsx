'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
export default function ScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.08, wheelMultiplier: 0.9 })
    let rafId: number
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(rafId); lenis.destroy() }
  }, [])
  return null
}
