import { cn } from '@/lib/utils'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

interface ContainerSectionProps {
  children?: React.ReactNode;
  className?: ClassNameValue;
}

const ContainerSection = ({children, className }: ContainerSectionProps) => {
  return (
    <section className={cn("px-10 sm:px-20 md:px-32 min-h-screen w-full", className)}>{children}</section>
  )
}

export default ContainerSection