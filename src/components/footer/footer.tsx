import { component$, Slot } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer>
      <Slot />
    </footer>
  );
});
