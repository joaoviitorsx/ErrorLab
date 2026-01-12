import * as Sentry from "@sentry/react";

export function setUserContext() {
  Sentry.setUser({
    id: "123",
    username: "joao.vitor",
    email: "joao@example.com",
  });
}
