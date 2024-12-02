import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { SkipLink } from "~/components/skiplink/skiplink";
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <SkipLink id="main" content="skip to main" />
      <Header>this is a header</Header>
      <main id="main">
        <Slot />
      </main>
      <Footer>this is a footer</Footer>
    </>
  );
});
