import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b48a58] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-[#2a2215] text-white hover:bg-[#24160f]",
        subtle:
          "bg-sand-200 text-[#2a2215] hover:bg-sand-300 border border-sand-300",
        ghost: "text-[#2a2215] hover:bg-sand-100",
        outline:
          "border border-sand-300 text-[#2a2215] hover:bg-sand-100 bg-white"
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
          {children}
        </Link>
      );
    }

    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

