"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import type { ComponentProps, ReactNode } from 'react'
import { cn, tv, type VariantProps } from '@/lib/utils'
import { useGSAP } from '@gsap/react'

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-60',
  variants: {
    variant: {
      primary: 'bg-primary-500 text-white hover:bg-primary-600',
      secondary: 'border border-primary-500 text-primary-500 hover:bg-primary-50',
    },
    size: {
      sm: 'h-9 text-xs',
      md: 'h-11',
      lg: 'h-12 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    children?: ReactNode
    label?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    icon?: ReactNode
  }


const Button = ({
  label,
  children,
  className,
  type = 'button',
  disabled,
  loading,
  icon,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  useGSAP(() => {
    gsap.fromTo(buttonRef.current, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
  })

  // INSERT_YOUR_CODE
  const handleMouseOver = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.06,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseOut = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      })
    }
  }

  return (
    <button
      {...props}
      type={type}
      ref={buttonRef}
      id='button'

      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(buttonStyles({ variant, size }), className)}
    >
      {icon}
      {children ?? label}
    </button>
  )
}

export default Button