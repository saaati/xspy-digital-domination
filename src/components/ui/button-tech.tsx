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
        // XSPY Tech Variants
        cyber: "bg-gradient-primary text-black font-bold shadow-glow-primary hover:shadow-glow-accent hover:scale-105 border border-electric-purple/30",
        neon: "bg-gradient-secondary text-black font-bold shadow-glow-secondary hover:shadow-glow-primary hover:scale-105 border border-cyber-blue/30",
        plasma: "bg-gradient-tech text-white font-bold shadow-glow-accent hover:animate-pulse-glow hover:scale-105 border border-plasma-pink/30",
        vip: "bg-gradient-radial from-electric-purple via-plasma-pink to-warning-orange text-white font-bold shadow-glow-accent hover:shadow-2xl hover:scale-110 border-2 border-plasma-pink/50 relative overflow-hidden",
        ghost_tech: "border border-electric-purple/50 text-electric-purple hover:bg-electric-purple/10 hover:shadow-glow-primary hover:text-plasma-pink"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
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