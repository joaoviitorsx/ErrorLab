import { useEffect, useState } from "react";
import * as Sentry from "@sentry/react";
import { fetchProducts } from "./api/productsApi";
import { OrderForm } from "./components/OrderForm";
import { ErrorButton } from "./components/ErrorButton";
import type { Product } from "./types/produto";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => {});
  }, []);

  return (
    <Sentry.ErrorBoundary fallback={<p>Algo deu errado 😢</p>}>
      <h1>ErrorLab</h1>
      <OrderForm products={products} />
      <ErrorButton />
    </Sentry.ErrorBoundary>
  );
}
