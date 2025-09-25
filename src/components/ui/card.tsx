import * as React from 'react'
import { twMerge } from 'tailwind-merge'
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={twMerge('card-glass rounded-2xl p-6 bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm', className)} {...props} /> }
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) { return <div className="mb-4" {...props} /> }
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 className="text-xl font-semibold text-slate-800 dark:text-white" {...props} /> }
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} /> }
