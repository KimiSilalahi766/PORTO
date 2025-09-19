import * as React from 'react'
import { twMerge } from 'tailwind-merge'
export function Badge({ className, variant='default', ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default'|'secondary'|'outline' }) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors duration-300'
  const variants = { default: 'bg-blue-600 text-white hover:bg-blue-700', secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300', outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-white/30 dark:text-white dark:hover:bg-white/10' }
  return <span className={twMerge(base, variants[variant], className)} {...props} />
}
