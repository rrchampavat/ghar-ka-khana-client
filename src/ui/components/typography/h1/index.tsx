import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TYPOGRAPHY_PROPS {
  children: ReactNode;
  className?: string;
}

const H1 = (props: TYPOGRAPHY_PROPS) => {
  const { children, className } = props;

  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
