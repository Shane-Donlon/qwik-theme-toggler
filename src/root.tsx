import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
        <script
          dangerouslySetInnerHTML={`
        (function() {
          function setTheme(theme) {
            document.documentElement.className = theme;
            localStorage.setItem('theme', theme);
          }
          const theme = localStorage.getItem('theme');

          if (theme) {
           document.head.querySelector('meta[name="color-scheme"]').content = \`\${theme} only\`;
            setTheme(theme);
          } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
             document.head.querySelector('meta[name="color-scheme"]').content =
        "dark only";
              setTheme('dark');}
              else {
               document.head.querySelector('meta[name="color-scheme"]').content =
        "light only";
                setTheme('light');}}
        })();

      `}
        ></script>
      </head>
      <body lang="en">
        <RouterOutlet />

        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
