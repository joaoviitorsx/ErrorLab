import type { Product } from "../types/produto";

export function ProductList({ products }: { products: Product[] }) {
  // ERRO proposital
  if (products.length === 0) {
    throw new Error("Lista de produtos vazia");
  }

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - R$ {p.price}</li>
      ))}
    </ul>
  );
}
