import withPlugins from "next-compose-plugins";
import withEnv from "next-env";

export default withPlugins(
  [
    // Load environment variables at build time
    withEnv(),
  ],
  {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    // Add any other Next.js configs here
  }
);
