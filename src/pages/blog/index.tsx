import React from "react";
import Blog from "../../components/Blog";
import LandingPageLayout from "@/components/Layout";

const BlogPage = () => {
  return (
    <LandingPageLayout title="Blog">
      <Blog />
    </LandingPageLayout>
  );
};

export default BlogPage;
