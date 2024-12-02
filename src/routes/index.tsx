import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "My Awesome homepage",
    },
  ],
};
