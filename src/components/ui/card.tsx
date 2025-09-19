import * as React from 'react'
import { twMerge } from 'tailwind-merge'
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={twMerge('card-glass rounded-2xl p-6', className)} {...props} /> }
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) { return <div className="mb-4" {...props} /> }
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 className="text-xl font-semibold" {...props} /> }
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} /> }
