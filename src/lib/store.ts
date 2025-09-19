'use client'
import { create } from 'zustand'
export type Filter = 'All'|'Data'|'AI'|'IoT'|'Web'
export const useUI = create<{ lang:'id'|'en', setLang:(l:'id'|'en')=>void, filter:Filter, setFilter:(f:Filter)=>void }>(set => ({
  lang: 'id', setLang:(lang)=>set({lang}), filter:'All', setFilter:(filter)=>set({filter})
}))
