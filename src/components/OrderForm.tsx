import { useState } from "react";
import { calcularTotal } from "../services/orderService";
import type { OrderItem } from "../types/order";
import type { Product, Props } from "../types/produto";

export function OrderForm({ products }: Props) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState<number | null>(null);

  function addItem(product: Product) {
    setItems((prev) => [
      ...prev,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    ]);
  }

  function handleCalcular() {
    const resultado = calcularTotal(items);
    setTotal(resultado);
  }

  return (
    <div>
      <h2>Criar Pedido</h2>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — R$ {p.price}
            <button onClick={() => addItem(p)}>Adicionar</button>
          </li>
        ))}
      </ul>

      <button onClick={handleCalcular}>Calcular Total</button>

      {total !== null && <p>Total: R$ {total}</p>}
    </div>
  );
}
