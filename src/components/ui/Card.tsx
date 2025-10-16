import React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ className = "", children, ...props }: CardProps) {
  const base = "rounded-xl border border-slate-200 bg-white p-5 sm:p-6";
  return (
    <div className={`${base}${className ? " " + className : ""}`} {...props}>
      {children}
    </div>
  );
}
