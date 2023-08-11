import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "About Me",
  };
}) satisfies PageLoad;
