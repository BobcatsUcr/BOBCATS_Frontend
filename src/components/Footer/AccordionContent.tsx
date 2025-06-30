import { useRef, useEffect } from "react";

interface AccordionProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const AccordionContent = ({ isOpen, children }: AccordionProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Si querés usar scrollHeight para animaciones dinámicas más adelante, podrías mantenerlo
      const _ = ref.current.scrollHeight; // Esto evitaría el warning si planeás usarlo luego
    }
  }, [children]);

  return (
    <ul
      ref={ref}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "mt-2 max-h-[999px]" : "max-h-0"
      } space-y-1 text-sm text-white md:max-h-full md:block`}
      style={{ marginTop: isOpen ? "0.5rem" : 0 }}
    >
      {children}
    </ul>
  );
};

export default AccordionContent;
