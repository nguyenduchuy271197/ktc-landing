import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-lg shadow-lg hover:scale-[102%] duration-200 hover:drop-shadow-xl hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "text-white bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:shadow-orange-300",
        secondary: "border",
      },
      size: {
        sm: "h-10 px-6",
        default: "h-12 px-8",
        lg: "h-12 md:h-14 px-14 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
