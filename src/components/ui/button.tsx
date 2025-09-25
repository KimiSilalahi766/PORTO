import * as React from 'react'
import { twMerge } from 'tailwind-merge'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'outline'|'ghost', size?: 'sm'|'md' }
export function Button({ className, variant='primary', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none select-none'
  const sizes = { sm: 'px-3 py-1.5', md: 'px-4 py-2' } as const
  const variants = { primary: 'bg-primary text-white hover:opacity-90', outline: 'border border-slate-300 bg-white/70 hover:bg-white/90 text-slate-900 dark:text-white dark:border-white/30 dark:bg-black/30 dark:hover:bg-black/45', ghost: 'text-slate-900 hover:bg-black/[.05] dark:text-white dark:hover:bg-white/[.08]' } as const
  return <button className={twMerge(base, sizes[size], variants[variant], className)} {...props} />
}
