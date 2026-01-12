import * as Sentry from "@sentry/react";
import type { OrderItem } from "../types/order";

export function calcularTotal(itens: OrderItem[]): number {
  if (!itens || itens.length === 0) {
    Sentry.captureMessage(
      "Tentativa de calcular total sem itens no pedido",
      { level: "warning" }
    );
    return 0;
  }

  return itens.reduce((total, item) => {
    if (item.price <= 0 || item.quantity <= 0) {
      Sentry.captureMessage(
        "Item inválido no pedido",
        {
          level: "error",
          extra: { item },
        }
      );
      throw new Error("Item inválido no pedido");
    }

    return total + item.price * item.quantity;
  }, 0);
}
