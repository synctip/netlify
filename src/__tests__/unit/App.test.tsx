import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "@/App";

describe("App component", () => {
  beforeAll(() => {
    i18n.init({
      lng: "en", // Set default language for tests
      fallbackLng: "en",
      resources: {
        en: {
          translation: {
            title: "Hi! What's your phone?",
          },
        },
        he: {
          translation: {
            title: "אהלן! מה מספר הנייד?",
          },
        },
      },
    });
  });

  test("renders the title in english", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    const titleElement = screen.getByText(/"Hi, What's phone number?/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders title in hebrew", () => {
    i18n.changeLanguage("he");

    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    const titleElement = screen.getByText(/היי, מה מספר הנייד?/i);
    expect(titleElement).toBeInTheDocument();
  });
});
