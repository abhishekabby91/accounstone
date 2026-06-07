import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-md",

        primary:
          "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-md",

        secondary:
          "bg-white text-[#0F172A] border border-slate-300 hover:bg-slate-50",

        outline:
          "border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",

        ghost:
          "text-[#0F172A] hover:bg-slate-100",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        link:
          "text-[#2563EB] underline-offset-4 hover:underline",
      },

      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }