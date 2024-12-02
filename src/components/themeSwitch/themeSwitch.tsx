import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.css?inline";
export const ThemeSwitch = component$(() => {
  useStylesScoped$(styles);
  const handleOnClick = $(() => {
    const theme = document.documentElement.className;
    const colorSchemeMeta = document.head.querySelector(
      'meta[name="color-scheme"]'
    ) as HTMLMetaElement | null;
    if (theme === "light") {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
      if (colorSchemeMeta) {
        colorSchemeMeta.content = "dark only";
      }
    } else {
      document.documentElement.className = "light";
      localStorage.setItem("theme", "light");
      if (colorSchemeMeta) {
        colorSchemeMeta.content = "light only";
      }
    }
  });

  return (
    <button
      type="button"
      onClick$={handleOnClick}
      aria-label="toggle visible theme"
      class="theme-switch"
    >
      <div aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 dark-icon"
        >
          <title>Dark Theme Icon</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="size-6 light-icon"
        >
          <title>Light Theme Icon</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </div>
    </button>
  );
});
