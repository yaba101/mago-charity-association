import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "li3jpnbc",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
