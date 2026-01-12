import * as Sentry from "@sentry/react";

export function ErrorButton() {
  function gerarErro() {
    Sentry.addBreadcrumb({
      category: "ui.click",
      message: "Usuário clicou no botão de erro proposital",
      level: "info",
    });

    throw new Error("Erro proposital disparado pelo usuário");
  }

  return <button onClick={gerarErro}>Gerar erro</button>;
}
