import * as Sentry from "@sentry/react";

export function initSentry() {
  console.log("🚀 Inicializando Sentry");

  Sentry.init({
    dsn: "https://c3a60422be4d1e4eda5e379de4e4a74b@o4510699919966208.ingest.us.sentry.io/4510699940020224",
    environment: "development",
    release: "errorlab@0.1.0",
    tracesSampleRate: 1.0,
  });
}
