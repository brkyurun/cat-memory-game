import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}
