"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/cn";

// Variants and sizes you can expand globally
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "responsive";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: string | number; // tailwind rounded value or number in px
  fullWidth?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    prefetch?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3 text-base sm:text-lg",
  // Responsive text sizing example: base->12px, md->14px, lg->16px
  responsive: "px-5 py-3 text-[12px] md:text-[14px] lg:text-[16px]",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-700 text-white shadow hover:bg-blue-800",
  secondary:
    "bg-blue-600/90 text-white hover:bg-blue-700",
  outline:
    "border border-white/80 text-white/95 hover:bg-white/10",
  ghost:
    "border border-blue-600/90 bg-transparent text-blue-600/90 hover:bg-black/5",
};

function getRounded(rounded?: string | number) {
  if (typeof rounded === "number") return `rounded-[${rounded}px]`;
  if (typeof rounded === "string") return `rounded-[${rounded}]`;
  return "rounded-[12px]";
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    rounded,
    fullWidth,
    className,
    leftIcon,
    rightIcon,
    children,
    ...rest
  } = props as ButtonProps & Record<string, unknown>;

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    getRounded(rounded),
    fullWidth ? "w-full" : undefined,
    className
  );
  console.log('classes', props.href);

  // Link mode
  if ("href" in props && props.href) {
    // Only pass valid Link props and let the rest go to the anchor element
    const { 
      href, 
      prefetch, 
      className: _className, 
      variant,
      size,
      rounded,
      fullWidth,
      leftIcon: _li,
      rightIcon: _ri,
      ...anchorProps 
    } = props as ButtonAsLink;
    
    return (
      <Link 
        href={href} 
        prefetch={prefetch} 
        className={classes}
        {...anchorProps}
      >
        {leftIcon ? <span aria-hidden className="mr-2">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? <span aria-hidden className="ml-2">{rightIcon}</span> : null}
      </Link>
    );
  }

  // Button mode
  // Exclude className from spread to avoid overriding our computed classes
  const { className: _btnClassName, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {leftIcon ? <span aria-hidden className="mr-2">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden className="ml-2">{rightIcon}</span> : null}
    </button>
  );
}
