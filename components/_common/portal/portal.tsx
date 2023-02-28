import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  id: string;
};

export const Portal = ({ children, id }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(`#${id}`);
    setMounted(true);
  }, [id]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
