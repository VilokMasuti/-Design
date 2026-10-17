import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  as?: React.ElementType;
}

export default function Container({ className, children, as }: ContainerProps) {
  const Component = as || "main";
  return (
    <Component className={`${className}  max-w-7xl   w-full mx-auto  `}>
      {children}
    </Component>
  );
}
