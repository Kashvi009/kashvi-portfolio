import { ReactNode, ElementType } from "react";
import { useRevealOnce } from "@/hooks/useReveal";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  heading?: boolean;
  className?: string;
  as?: ElementType;
}

const Reveal = ({ children, delay = 0, duration, heading, className = "", as: Tag = "div" }: Props) => {
  const { ref, style } = useRevealOnce<HTMLDivElement>({ heading, delay, duration });
  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
