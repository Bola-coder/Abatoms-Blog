import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mygl52ny",
  dataset: "production",
  useCdn: true,
});
