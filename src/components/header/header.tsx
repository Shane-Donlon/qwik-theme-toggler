import { Slot, component$ } from "@builder.io/qwik";
import { ThemeSwitch } from "../themeSwitch/themeSwitch";
export const Header = component$(() => {
  return (
    <header>
      <ThemeSwitch />
      <Slot />
    </header>
  );
});
