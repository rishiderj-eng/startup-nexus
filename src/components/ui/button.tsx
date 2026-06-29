import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Gradient primary — the signature CTA
        default:
          "text-white bg-[linear-gradient(120deg,hsl(var(--primary)),hsl(var(--accent)))] bg-[length:150%_auto] hover:bg-right hover:shadow-[0_14px_40px_-12px_hsl(var(--primary)/0.6)] [transition:background-position_0.4s_ease,box-shadow_0.3s_ease,transform_0.2s_ease] hover:-translate-y-0.5",
        secondary:
          "bg-white/[0.06] text-foreground border border-white/[0.08] hover:bg-white/[0.1] hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-white/[0.04] hover:border-white/20",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.05]",
        success:
          "bg-success text-success-foreground hover:bg-success/90 hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
