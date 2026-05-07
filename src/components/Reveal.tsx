import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }: Props) => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[600ms] ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
