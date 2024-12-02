import { component$ } from "@builder.io/qwik";
import styles from "./skiplink.module.css";

interface SkipLinkProps {
  id: string;
  content: string;
}

export const SkipLink = component$(({ id, content }: SkipLinkProps) => {
  return (
    <a href={`#${id}`} id={`skip to ${id} link`} class={styles.hidden}>
      {content}
    </a>
  );
});
