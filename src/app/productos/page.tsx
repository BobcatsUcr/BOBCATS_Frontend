import { Suspense } from "react";
import ProductosPageContent from "./ProductosPageContent";

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando productos...</div>}>
      <ProductosPageContent />
    </Suspense>
  );
}