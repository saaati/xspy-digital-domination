import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Modern Tech Variants - Clean & Mobile-First
        cyber: "bg-gradient-primary text-primary-foreground font-bold shadow-glow-primary hover:shadow-glow-secondary hover:scale-105 border border-cyber-cyan/30 transition-all duration-300",
        aqua: "bg-gradient-secondary text-secondary-foreground font-bold shadow-glow-secondary hover:shadow-glow-primary hover:scale-105 border border-electric-teal/30 transition-all duration-300",
        tech: "bg-gradient-tech text-white font-bold shadow-glow-accent hover:animate-pulse-glow hover:scale-105 border border-neon-aqua/30 transition-all duration-300",
        vip: "bg-gradient-to-r from-cyber-cyan via-electric-teal to-neon-aqua text-white font-bold shadow-glow-accent hover:shadow-2xl hover:scale-110 border-2 border-electric-teal/50 relative overflow-hidden transition-all duration-500",
        ghost_tech: "glass-card border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-glow-primary hover:text-electric-teal transition-all duration-300"
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-12 py-5 text-lg",
        icon: "h-12 w-12",
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

const ButtonTech = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const isVip = variant === "vip"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isVip && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-scan" />
        )}
        {children}
      </Comp>
    )
  }
)
ButtonTech.displayName = "ButtonTech"

export { ButtonTech, buttonVariants }