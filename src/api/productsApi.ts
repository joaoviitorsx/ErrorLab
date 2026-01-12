import * as Sentry from "@sentry/react";
import type { Product } from "../types/produto";

export async function fetchProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simula erro de API (30% das vezes)
  if (Math.random() < 0.3) {
    const error = new Error("Falha ao buscar produtos (API)");
    Sentry.captureException(error);
    throw error;
  }

  return [
    { id: 1, name: "Teclado", price: 150 },
    { id: 2, name: "Mouse", price: 80 },
    { id: 3, name: "Monitor", price: 1200 },
  ];
}
