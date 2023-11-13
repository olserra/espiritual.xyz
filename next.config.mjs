import withPlugins from "next-compose-plugins";
import withEnv from "next-env";

export default withPlugins(
  [
    // Load environment variables at build time
    withEnv(),
  ],
  {
    images: {
      domains: [
        "avatars.githubusercontent.com",
        "i.ytimg.com",
        "lh3.googleusercontent.com",
        "flowbite.s3.amazonaws.com",
        "drive.google.com",
        "cdn.analyticsvidhya.com",
        "images.mktw.net",
        "document360.com",
      ],
    },
    // Add any other Next.js configs here
  }
);
